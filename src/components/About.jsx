import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const ResumeInlinePdf = lazy(() => import('./ResumeInlinePdf'));

const About = () => {
  return (
    <section className="py-20 sm:py-32 bg-white/72 dark:bg-slate-950/72 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-full h-full select-none object-cover"
                draggable={false}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              A little about me
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {personalInfo.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={personalInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.66a11.86 11.86 0 005.74 1.47h.01c6.57 0 11.9-5.33 11.9-11.9a11.8 11.8 0 00-3.45-8.43zM12.07 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.22-3.75.98 1-3.66-.24-.38a9.88 9.88 0 01-1.52-5.24c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 017.03 2.92 9.85 9.85 0 012.89 7.01c0 5.47-4.45 9.92-9.92 9.92zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.02 1-1.02 2.44 0 1.43 1.05 2.82 1.2 3.01.15.2 2.06 3.14 5 4.4.7.3 1.25.48 1.68.62.7.22 1.33.2 1.83.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Resume
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-2xl border border-slate-200/90 bg-gray-50 p-4 shadow-lg dark:border-slate-600/50 dark:bg-gray-800 sm:p-6">
              <Suspense
                fallback={
                  <div className="flex min-h-[28rem] items-center justify-center rounded-lg border border-dashed border-slate-300/80 bg-white/50 text-sm text-slate-500 dark:border-slate-600 dark:bg-slate-900/30 dark:text-slate-400">
                    Loading resume preview…
                  </div>
                }
              >
                <ResumeInlinePdf fileUrl={personalInfo.resume} />
              </Suspense>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center px-7 py-3.5 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30"
                >
                  Open in new tab
                </a>
                <a
                  href={personalInfo.resume}
                  download
                  data-cursor-hover
                  className="inline-flex items-center px-7 py-3.5 bg-white/70 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200/90 dark:border-slate-600/80 hover:border-primary-500/60 dark:hover:border-primary-400/50 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

