import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50/68 via-white/64 to-slate-100/68 dark:from-slate-950/72 dark:via-slate-900/68 dark:to-slate-950/72 backdrop-blur-[1px]">
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid bg-center opacity-[0.65] dark:bg-grid-pattern-dark dark:opacity-50"
        aria-hidden
      />
      <div
        className="absolute -left-[20%] top-1/4 h-[min(520px,55vw)] w-[min(520px,55vw)] rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-500/15"
        aria-hidden
      />
      <div
        className="absolute -right-[15%] bottom-1/4 h-[min(480px,50vw)] w-[min(480px,50vw)] rounded-full bg-sky-400/15 blur-3xl dark:bg-sky-500/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-slate-50/40 dark:from-slate-950/90 dark:via-transparent dark:to-slate-950/30"
        aria-hidden
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-primary-600 dark:text-primary-400 mb-8"
            >
              Portfolio
            </motion.p>
            <div className="inline-block mb-6">
              <motion.img
                src={personalInfo.image}
                alt={personalInfo.name}
                draggable={false}
                className="w-32 h-32 sm:w-40 sm:h-40 select-none rounded-full object-cover border border-white/80 shadow-2xl shadow-slate-900/10 ring-2 ring-primary-500/20 dark:border-slate-700/80 dark:shadow-black/40 dark:ring-primary-400/25"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-medium max-w-2xl mx-auto leading-snug"
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center px-7 py-3.5 bg-primary-600 dark:bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30"
            >
              Let's work together
            </a>
            <a
              href="#work"
              data-cursor-hover
              className="inline-flex items-center px-7 py-3.5 bg-white/70 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200/90 dark:border-slate-600/80 hover:border-primary-500/60 dark:hover:border-primary-400/50 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
            >
              View my work
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

