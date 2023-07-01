import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  contents: string;
};

export default function MarkDownView({ contents }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkEmoji]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag='div'
              style={{
                ...vscDarkPlus,
                hljs: {
                  ...vscDarkPlus.hljs,
                  backgroundColor: 'transparents',
                },
              }}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className='text-amber-500'>{children}</code>
          );
        },
        h1({ children, ...props }) {
          return (
            <h1
              {...props}
              className='font-bold text-neutral-900 dark:text-neutral-200 mb-4'
            >
              {children}
            </h1>
          );
        },
        h2({ children, ...props }) {
          return (
            <h2
              {...props}
              className='font-bold text-neutral-900 dark:text-neutral-200 mb-4'
            >
              {children}
            </h2>
          );
        },
        h3({ children, ...props }) {
          return (
            <h3
              {...props}
              className='font-bold text-neutral-900 dark:text-neutral-200 mb-4'
            >
              {children}
            </h3>
          );
        },
        a({ children, ...props }) {
          return (
            <a {...props} className='text-teal-500'>
              {children}
            </a>
          );
        },
        blockquote({ children, ...props }) {
          return (
            <blockquote
              className='pl-4 italic font-semibold text-neutral-700 dark:text-neutral-200 dark:bg-transparent  p-2'
              {...props}
            >
              {children}
            </blockquote>
          );
        },
        em({ children, ...props }) {
          return (
            <em
              {...props}
              className='text-rose-500 dark:text-rose-400 p-[0.2rem] rounded-lg bg-gray-50 dark:bg-gray-800'
            >
              {children}
            </em>
          );
        },
        strong({ children, ...props }) {
          return (
            <strong
              {...props}
              className='text-rose-500 dark:text-rose-400 p-[0.2rem] rounded-lg bg-gray-50 dark:bg-gray-800'
            >
              {children}
            </strong>
          );
        },
      }}
    >
      {contents}
    </ReactMarkdown>
  );
}
