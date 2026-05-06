import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = ({ images, currentIndex, onClose, onNavigate }) => {
  // Handle keyboard navigation and body scroll lock
  useEffect(() => {
    // Only apply scroll lock when gallery is actually open
    if (currentIndex === null) {
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate(-1);
      } else if (e.key === 'ArrowRight') {
        onNavigate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when gallery is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [currentIndex, onClose, onNavigate]);

  if (!images || images.length === 0 || currentIndex === null || currentIndex < 0 || currentIndex >= images.length) {
    return null;
  }

  const currentImage = images[currentIndex];
  if (!currentImage) {
    return null;
  }

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const modal = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 pt-16 pb-20 backdrop-blur-sm sm:p-6 sm:pt-14 sm:pb-16"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Close gallery"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        {/* Image Counter */}
        <div className="absolute left-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Previous Button */}
        {hasPrevious && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(-1);
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-4"
            aria-label="Previous image"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
        )}

        {/* Next Button */}
        {hasNext && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(1);
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-4"
            aria-label="Next image"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        )}

        {/* Image — explicit max height so short/wide assets stay visually centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="flex min-h-0 w-full max-w-7xl items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={currentImage}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-h-[min(85vh,calc(100dvh-7rem))] w-auto max-w-full select-none object-contain rounded-lg shadow-2xl"
            draggable={false}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modal, document.body);
};

export default ImageGallery;

