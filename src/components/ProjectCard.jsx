import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/work/${project.id}`}
        className="block relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] transition-transform duration-300 hover:scale-[1.02]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.categories.map((category, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs sm:text-sm font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="text-white/90 text-sm sm:text-base line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

