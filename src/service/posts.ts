import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

export const getPosts = async () => {
  const filePath = readdirSync('./data/posts');
  const posts = filePath.map((fileName) => {
    const content = readFileSync(`./data/posts/${fileName}`, 'utf-8');
    const [slug, _] = fileName.split('.');
    return {
      ...matter(content).data,
      slug,
    };
  });

  return {
    posts,
    total: posts?.length,
  };
};

export const getPost = async (slug: string) => {};
