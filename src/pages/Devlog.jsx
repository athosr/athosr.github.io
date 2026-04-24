import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { formatDateFromYyyyMmDd } from '../utils/date';
import { devlogEntries } from '../utils/devlog';

const Devlog = () => {
  const [expandedEntries, setExpandedEntries] = useState({});

  const toggleEntry = (slug) => {
    setExpandedEntries((previous) => ({
      ...previous,
      [slug]: !previous[slug],
    }));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Devlog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Notes on what I am building, learning, and shipping.
            </p>
          </motion.div>

          <div className="space-y-6">
            {devlogEntries.map((entry, index) => {
              const isExpanded = !!expandedEntries[entry.slug];

              return (
                <motion.article
                  key={entry.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDateFromYyyyMmDd(entry.date)}
                    </span>
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {entry.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-5">{entry.summary}</p>

                  {isExpanded && <MarkdownRenderer content={entry.content} className="mb-6" />}

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => toggleEntry(entry.slug)}
                      className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      type="button"
                    >
                      {isExpanded ? 'Collapse' : 'Expand'}
                    </button>

                    <Link
                      to={`/devlog/${entry.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      Read full post
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Devlog;
