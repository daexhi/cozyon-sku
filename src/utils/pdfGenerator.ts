import { jsPDF } from 'jspdf';
import { Product } from '../data/products';
import { translations, Language } from '../i18n/translations';
import { getLocalizedProduct } from './translator';

interface PDFProgressOptions {
  onProgress?: (current: number, total: number) => void;
  lang?: Language;
}

/**
 * Compresses an image through an offscreen canvas downscaling to max dimensions
 * and encoding as a high-efficiency JPEG with ~55% quality.
 * Reduces raw images from ~1-3 MB down to ~25-45 KB each.
 */
const compressImageForPDF = (url: string, maxDimension = 540, quality = 0.58): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = Math.max(width, 1);
        canvas.height = Math.max(height, 1);
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return resolve(url);
        }

        // Clean white background for transparent PNGs
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Export as compressed JPEG
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      } catch (err) {
        console.warn('Canvas compression fallback to raw image:', err);
        resolve(url);
      }
    };
    img.onerror = (e) => reject(e);
    img.src = url;
  });
};

export const generateCatalogPDF = async (
  products: Product[],
  options?: PDFProgressOptions
) => {
  const { onProgress, lang = 'id' } = options || {};
  const t = translations[lang] || translations.id;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true, // Internal stream compression
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;

  const total = products.length;

  for (let i = 0; i < total; i++) {
    const rawProduct = products[i];
    const product = getLocalizedProduct(rawProduct, lang);
    if (i > 0) {
      doc.addPage();
    }

    if (onProgress) {
      onProgress(i + 1, total);
    }

    // Modern Header Accent Bar
    doc.setFillColor(15, 23, 42); // Slate-900
    doc.rect(0, 0, pageWidth, 12, 'F');

    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('COZYON PRODUCT CATALOG', margin, 8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(148, 163, 184); // Slate-400
    doc.text(`PAGE ${i + 1} OF ${total}`, pageWidth - margin, 8, { align: 'right' });

    // SKU Title
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(product.sku, pageWidth / 2, margin + 12, { align: 'center' });

    // Category Subtitle
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(16, 185, 129); // Emerald-500
    doc.text((product.category || 'General').toUpperCase(), pageWidth / 2, margin + 18, { align: 'center' });

    // Product Name
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(51, 65, 85); // Slate-700
    doc.text(product.name, pageWidth / 2, margin + 25, { align: 'center', maxWidth: contentWidth });

    // Compressed Image Handling
    const imgBoxY = margin + 29;
    const maxImgHeight = 88;
    const maxImgWidth = 120;

    try {
      const compressedImgData = await compressImageForPDF(product.image, 520, 0.58);
      
      // Draw a subtle border frame around product photo
      doc.setDrawColor(241, 245, 249);
      doc.setFillColor(248, 250, 252);
      doc.roundedRect((pageWidth - maxImgWidth) / 2 - 2, imgBoxY - 2, maxImgWidth + 4, maxImgHeight + 4, 3, 3, 'FD');

      doc.addImage(
        compressedImgData,
        'JPEG',
        (pageWidth - maxImgWidth) / 2,
        imgBoxY,
        maxImgWidth,
        maxImgHeight,
        undefined,
        'FAST'
      );
    } catch (error) {
      console.warn(`Failed image for ${product.sku}:`, error);
      doc.setFontSize(11);
      doc.setTextColor(239, 68, 68);
      doc.text('(Gambar tidak tersedia)', pageWidth / 2, imgBoxY + 40, { align: 'center' });
    }

    let currentY = imgBoxY + maxImgHeight + 10;
    const boxPadding = 3.5;
    const boxGap = 2.5;

    // Helper for Pill-like or Boxed labels
    const drawSpecTag = (text: string, x: number, y: number) => {
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      const textWidth = doc.getTextWidth(text);
      const bWidth = textWidth + boxPadding * 2;
      const bHeight = 7;

      doc.setDrawColor(203, 213, 225); // slate-300
      doc.setFillColor(241, 245, 249); // slate-100
      doc.roundedRect(x, y - 5, bWidth, bHeight, 1.5, 1.5, 'FD');

      doc.setTextColor(30, 41, 59); // slate-800
      doc.text(text, x + boxPadding, y);

      return bWidth;
    };

    // Colors Section
    if (product.colors && product.colors.length > 0) {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(71, 85, 105);
      doc.text(t.pdfColorLabel.toUpperCase(), margin, currentY);

      let tagX = margin + 35;
      product.colors.forEach((color) => {
        if (tagX + doc.getTextWidth(color) + 12 > pageWidth - margin) {
          tagX = margin + 35;
          currentY += 8;
        }
        const w = drawSpecTag(color, tagX, currentY);
        tagX += w + boxGap;
      });
      currentY += 10;
    }

    // Sizes Section
    if (product.sizes && product.sizes.length > 0) {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(71, 85, 105);
      doc.text(t.pdfSizeLabel.toUpperCase(), margin, currentY);

      let tagX = margin + 35;
      product.sizes.forEach((size) => {
        if (tagX + doc.getTextWidth(size) + 12 > pageWidth - margin) {
          tagX = margin + 35;
          currentY += 8;
        }
        const w = drawSpecTag(size, tagX, currentY);
        tagX += w + boxGap;
      });
      currentY += 11;
    }

    // Description Divider
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 6;

    // Description Section
    if (product.description) {
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(100, 116, 139);
      doc.text(t.pdfDescLabel.toUpperCase(), margin, currentY);
      currentY += 5;

      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);

      // Split text to fit page
      const descLines = doc.splitTextToSize(product.description, contentWidth);
      const remainingHeight = pageHeight - margin - currentY - 5;
      const maxLines = Math.floor(remainingHeight / 4.2);
      const linesToPrint = descLines.slice(0, Math.max(maxLines, 6));

      doc.text(linesToPrint, margin, currentY, { lineHeightFactor: 1.35 });
    }

    // Footer Watermark/Contact
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('Cozyon Warehouse & Distribution System — Confidential Catalog', pageWidth / 2, pageHeight - 6, {
      align: 'center',
    });
  }

  const filename = `Cozyon_Catalog_Compressed_${new Date().toISOString().slice(0, 10)}.pdf`;
  doc.save(filename);
};
