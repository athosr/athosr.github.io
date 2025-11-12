import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioProjects, personalInfo } from '../data/portfolio';
import CodeBlock from './CodeBlock';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/work" className="text-primary-600 hover:text-primary-700">
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.categories.map((category, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>

            {project.role && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Role</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {project.role.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed">
              {project.fullDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">{paragraph}</p>
              ))}
            </div>

            {project.websiteUrl && (
              <motion.a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg mb-8"
              >
                Visit Website
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}

            {/* Video */}
            {project.videoUrl && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="aspect-video">
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && !project.isDataProjects && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
              >
                {project.gallery.map((image, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    className="rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Data Projects - Special Layout */}
            {project.isDataProjects && project.projects && (
              <div className="space-y-16 mt-12">
                {project.projects.map((subProject, projectIdx) => (
                  <motion.div
                    key={projectIdx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + projectIdx * 0.1 }}
                    className="border-t border-gray-200 pt-12"
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      {subProject.title}
                    </h2>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {subProject.description}
                    </p>

                    {subProject.details && subProject.details.length > 0 && (
                      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                        {subProject.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}

                    {/* Project Images */}
                    {subProject.images && subProject.images.length > 0 && (
                      <div className="grid grid-cols-1 gap-6 my-8">
                        {subProject.images.map((image, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 * idx }}
                            className="rounded-xl overflow-hidden shadow-lg"
                          >
                            <img
                              src={image}
                              alt={`${subProject.title} ${idx + 1}`}
                              className="w-full h-auto object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Code Block */}
                    {subProject.code && (
                      <CodeBlock
                        code={subProject.code.content}
                        language={subProject.code.language}
                        title="Show Code"
                      />
                    )}

                    {/* Additional Code Block */}
                    {subProject.additionalCode && (
                      <div className="mt-6">
                        <p className="text-gray-700 mb-4">
                          {subProject.additionalCode.description}
                        </p>
                        <CodeBlock
                          code={subProject.additionalCode.content}
                          language={subProject.additionalCode.language}
                          title="Show Code"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center bg-gray-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's work together
          </h2>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

