import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeBlock = ({ code, language, title = 'Show Code' }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && window.Prism) {
      // Re-run Prism highlighting when code block is opened
      window.Prism.highlightAll();
    }
  }, [isOpen]);

  return (
    <div className="my-6">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-md"
      >
        {isOpen ? 'Hide Code' : title}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <pre className="text-sm">
                <code className={`language-${language}`}>{code}</code>
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodeBlock;

