import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { formatDateFromYyyyMmDd } from '../utils/date';
import { getDevlogEntryBySlug } from '../utils/devlog';

const DevlogPost = () => {
  const { slug } = useParams();
  const entry = getDevlogEntryBySlug(slug);

  if (!entry) {
    return (
      <>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Post not found
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                The devlog entry you requested does not exist.
              </p>
              <Link
                to="/devlog"
                className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                Back to Devlog
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8"
          >
            <Link
              to="/devlog"
              className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6"
            >
              Back to devlog
            </Link>

            <div className="mb-5">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatDateFromYyyyMmDd(entry.date)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {entry.title}
            </h1>

            {entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <MarkdownRenderer content={entry.content} />
          </motion.article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DevlogPost;
