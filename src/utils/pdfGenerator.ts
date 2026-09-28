import { jsPDF } from 'jspdf';
import { Product } from '../data/products';

export const generateCatalogPDF = async (products: Product[]) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  const loadImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
    });
  };

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (i > 0) {
      doc.addPage();
    }

    // SKU Title
    doc.setFontSize(42);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(product.sku, pageWidth / 2, margin + 20, { align: 'center' });

    // Image
    try {
      const img = await loadImage(product.image);
      const imgWidth = 140;
      const imgHeight = (img.height * imgWidth) / img.width;
      const finalImgHeight = Math.min(imgHeight, 140);
      const finalImgWidth = (img.width * finalImgHeight) / img.height;
      
      doc.addImage(
        img, 
        'JPEG', 
        (pageWidth - finalImgWidth) / 2, 
        margin + 35, 
        finalImgWidth, 
        finalImgHeight
      );
      
      let currentY = margin + 35 + finalImgHeight + 25;
      const labelX = margin;
      const itemsStartX = margin + 35;
      const boxPadding = 4;
      const boxGap = 3;

      // Helper to draw a boxed item
      const drawBoxedItem = (text: string, x: number, y: number, fontSize: number = 10) => {
        doc.setFontSize(fontSize);
        doc.setFont('helvetica', 'normal');
        const textWidth = doc.getTextWidth(text);
        const boxWidth = textWidth + boxPadding * 2;
        const boxHeight = 10;
        
        doc.setDrawColor(226, 232, 240); // slate-200
        doc.rect(x, y - boxHeight / 2 - 1, boxWidth, boxHeight);
        
        doc.setTextColor(51, 65, 85); // slate-700
        doc.text(text, x + boxPadding, y + 1);
        
        return boxWidth;
      };

      // Colors
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text('Warna', labelX, currentY);

      if (product.colors && product.colors.length > 0) {
        let itemX = itemsStartX;
        product.colors.forEach(color => {
          const width = drawBoxedItem(color, itemX, currentY);
          itemX += width + boxGap;
        });
      }

      currentY += 20;

      // Sizes
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text('Ukuran', labelX, currentY);

      let itemX = itemsStartX;
      product.sizes.forEach(size => {
        const width = drawBoxedItem(size, itemX, currentY);
        itemX += width + boxGap;
      });

    } catch (error) {
      console.error(`Failed to load image for ${product.sku}:`, error);
      doc.setFontSize(12);
      doc.setTextColor(239, 68, 68); // red-500
      doc.text('Gagal memuat gambar produk', pageWidth / 2, margin + 50, { align: 'center' });
    }
  }

  doc.save('Cozyon_SKU_Catalog.pdf');
};
