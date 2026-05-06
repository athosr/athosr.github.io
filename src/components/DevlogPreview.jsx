import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatDateFromYyyyMmDd } from '../utils/date';
import { getRecentDevlogEntries } from '../utils/devlog';

const MotionLink = motion(Link);

const DevlogPreview = () => {
  const entries = getRecentDevlogEntries(3);

  return (
    <section className="py-20 sm:py-28 bg-white/72 dark:bg-gray-800/72 backdrop-blur-[2px]">
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
            <MotionLink
              key={entry.slug}
              to={`/devlog/${entry.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group block rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6 outline-none transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary-500/45 hover:bg-gray-50/95 hover:shadow-lg hover:shadow-primary-500/10 active:translate-y-0 active:scale-[0.99] dark:hover:border-primary-400/40 dark:hover:bg-gray-900/95 dark:hover:shadow-primary-400/10 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {formatDateFromYyyyMmDd(entry.date)}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-primary-700 dark:group-hover:text-primary-300">
                {entry.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{entry.summary}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 transition-all duration-200 group-hover:gap-2">
                Read post
                <span aria-hidden className="translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </MotionLink>
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
