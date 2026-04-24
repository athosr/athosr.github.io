import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatDateFromYyyyMmDd } from '../utils/date';
import { getRecentDevlogEntries } from '../utils/devlog';

const DevlogPreview = () => {
  const entries = getRecentDevlogEntries(3);

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Devlog
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recent notes on projects, experiments, and what I am learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry, index) => (
            <motion.article
              key={entry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {formatDateFromYyyyMmDd(entry.date)}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{entry.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{entry.summary}</p>
              <Link
                to={`/devlog/${entry.slug}`}
                className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                Read post
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/devlog"
            className="inline-flex items-center px-6 py-3 rounded-lg font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            View all devlog posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DevlogPreview;
