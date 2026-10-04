import React, { useState, useEffect } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, X, Share } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../i18n/translations';

interface Props {
  lang?: Language;
}

export const PWAInstallPrompt: React.FC<Props> = ({ lang = 'id' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showPrompt, setShowPrompt] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  const t = translations[lang] || translations.id;

  useEffect(() => {
    if ((isInstallable || isIOS) && !isInstalled) {
      const timer = setTimeout(() => setShowPrompt(true), 3500);
      return () => clearTimeout(timer);
    }
  }, [isInstallable, isIOS, isInstalled]);

  if (isInstalled) return null;

  const handleInstall = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) setShowPrompt(false);
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 z-40 md:left-auto md:right-6 md:w-96"
          >
            <div className="bg-slate-900 text-white p-4.5 rounded-3xl shadow-2xl border border-slate-800 flex flex-col gap-3.5 backdrop-blur-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center shrink-0">
                    <img src="/icon.svg" alt="Cozyon Logo" className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">{t.pwaInstallTitle}</h3>
                    <p className="text-slate-400 text-xs leading-tight">
                      {t.pwaInstallDesc}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowPrompt(false)}
                  className="text-slate-500 hover:text-white transition-colors p-1"
                >
                  <X size={16} />
                </button>
              </div>

              <button
                onClick={handleInstall}
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
              >
                <Download size={15} />
                <span>{isIOS ? t.installIos : t.installNow}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full text-slate-100 shadow-2xl relative"
            >
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center">
                  <img src="/icon.svg" alt="Cozyon Logo" className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{t.installIos}</h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Buka menu browser Safari untuk menambahkan ke layar utama:
                  </p>
                </div>

                <div className="w-full space-y-2.5 text-left text-xs">
                  <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800">
                    <div className="w-7 h-7 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <p className="text-slate-300">
                      Klik tombol Bagikan <Share size={13} className="inline mx-1 text-emerald-400" /> di Safari.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800">
                    <div className="w-7 h-7 bg-emerald-500/20 text-emerald-400 rounded-lg flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <p className="text-slate-300">
                      Pilih opsi <span className="font-bold text-white">"Add to Home Screen"</span>.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl font-bold text-xs transition-colors"
                >
                  {t.understood}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
