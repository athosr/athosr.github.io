import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { workProjects } from '../utils/work';

const ProjectGrid = () => {
  return (
    <section id="work" className="py-20 sm:py-32 bg-slate-100/68 dark:bg-slate-900/72 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            My Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've worked on throughout my career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {workProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;

