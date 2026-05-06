import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import MarkdownCodeBlock from './MarkdownCodeBlock';

const markdownClassMap = {
  p: 'text-gray-700 dark:text-gray-300 leading-7 mb-4',
  h1: 'text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4',
  h2: 'text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4',
  h3: 'text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3',
  ul: 'list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2',
  ol: 'list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2',
  li: 'leading-7',
  a: 'text-primary-600 dark:text-primary-400 hover:underline',
  blockquote: 'border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic text-gray-600 dark:text-gray-400 my-4',
  code: 'bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm text-gray-800 dark:text-gray-200',
  pre: 'bg-gray-100 dark:bg-gray-800 rounded-xl p-4 overflow-x-auto mb-4',
};

const MarkdownRenderer = ({ content, className = '' }) => (
  <div className={className}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        p: ({ children }) => <p className={markdownClassMap.p}>{children}</p>,
        h1: ({ children }) => <h1 className={markdownClassMap.h1}>{children}</h1>,
        h2: ({ children }) => <h2 className={markdownClassMap.h2}>{children}</h2>,
        h3: ({ children }) => <h3 className={markdownClassMap.h3}>{children}</h3>,
        ul: ({ children }) => <ul className={markdownClassMap.ul}>{children}</ul>,
        ol: ({ children }) => <ol className={markdownClassMap.ol}>{children}</ol>,
        li: ({ children }) => <li className={markdownClassMap.li}>{children}</li>,
        a: ({ children, href }) => (
          <a href={href} className={markdownClassMap.a} target="_blank" rel="noreferrer">
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className={markdownClassMap.blockquote}>{children}</blockquote>
        ),
        code: ({ children, className }) => {
          const isInline = !className;
          return isInline ? (
            <code className={markdownClassMap.code}>{children}</code>
          ) : (
            <code className={`${className} text-sm text-gray-800 dark:text-gray-200`}>
              {children}
            </code>
          );
        },
        pre: ({ children }) => <MarkdownCodeBlock>{children}</MarkdownCodeBlock>,
        img: ({ src, alt }) => (
          <img
            src={src}
            alt={alt || 'Devlog media'}
            className="w-full h-auto rounded-xl border border-gray-200 dark:border-gray-700 mb-4 select-none"
            loading="lazy"
            draggable={false}
          />
        ),
        video: ({ src, children, ...props }) => (
          <video
            src={src}
            {...props}
            controls
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 mb-4 bg-black"
          >
            {children}
          </video>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default MarkdownRenderer;
