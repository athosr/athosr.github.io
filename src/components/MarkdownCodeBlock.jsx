import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MarkdownCodeBlock = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const codeContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen && window.Prism && codeContainerRef.current) {
      window.Prism.highlightAllUnder(codeContainerRef.current);
    }
  }, [isOpen]);

  return (
    <div className="my-6">
      <motion.button
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsOpen((previous) => !previous);
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-md"
        type="button"
      >
        {isOpen ? 'Hide Code' : 'Show Code'}
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4 overflow-hidden"
          >
            <div
              ref={codeContainerRef}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-xl"
            >
              <pre className="text-sm mb-0 overflow-x-auto p-4">{children}</pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarkdownCodeBlock;
