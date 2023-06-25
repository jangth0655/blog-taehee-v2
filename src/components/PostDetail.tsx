'use client';

import { Post } from '@/types/post';
import { formatMMMdYYYt } from '@/utils/dateFormat';
import { memo } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';

type Props = {
  contents: string;
  metaData: Post;
};

function PostDetail({ contents, metaData }: Props) {
  const { category, date, path, title } = metaData;

  return (
    <section>
      <header className='text-center space-y-3 pt-5 pb-12 border-b-[1px]'>
        <span className='text-gray-500'>{formatMMMdYYYt(date)}</span>
        <h1 className='font-bold text-4xl'>{title}</h1>
      </header>
      <main className='mt-12 leading-7 prose lg:prose-xl'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkEmoji]}
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
          }}
        >
          {contents}
        </ReactMarkdown>
      </main>
    </section>
  );
}

export default memo(PostDetail);
