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
      <div className="min-h-screen bg-gray-50/72 dark:bg-gray-900/72 pt-20 backdrop-blur-[2px]">
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
                  className="group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary-500/45 hover:shadow-lg hover:shadow-primary-500/10 dark:hover:border-primary-400/40 dark:hover:shadow-primary-400/10"
                >
                  <Link
                    to={`/devlog/${entry.slug}`}
                    className="absolute inset-0 z-[1] rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800"
                    aria-label={`Read full post: ${entry.title}`}
                  />

                  <div className="relative z-[2] pointer-events-none">
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

                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-primary-700 dark:group-hover:text-primary-300">
                      {entry.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-5">{entry.summary}</p>
                  </div>

                  {isExpanded && (
                    <div className="relative z-[3] mb-6 pointer-events-auto">
                      <MarkdownRenderer content={entry.content} />
                    </div>
                  )}

                  <div className="relative z-[2] flex flex-wrap items-center gap-4 pointer-events-none">
                    <button
                      onClick={() => toggleEntry(entry.slug)}
                      className="pointer-events-auto inline-flex items-center rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-100 dark:hover:bg-slate-600"
                      type="button"
                    >
                      {isExpanded ? 'Collapse' : 'Expand'}
                    </button>

                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 transition-all duration-200 group-hover:gap-2">
                      Read full post
                      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
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
