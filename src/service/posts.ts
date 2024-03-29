import { Post } from "@/types/post";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

export type GetPosts = {
  data: Post[];
  total: number;
};

type GetPost = { metaData: Post; contents: string };

export const getPosts = async (): Promise<GetPosts> => {
  const filePath = readdirSync("./data/posts");
  const posts = filePath.map((fileName) => {
    const content = readFileSync(`./data/posts/${fileName}`, "utf-8");

    const [slug, _] = fileName.split(".");
    return {
      ...matter(content).data,
      date: matter(content).data.date.toISOString(),
      slug,
    };
  });

  return {
    data: posts as Post[],
    total: posts?.length,
  };
};

export const getPostPaths = async (): Promise<{ slug: string }[]> => {
  const files = readdirSync("./data/posts");
  const paths = files.map((file) => {
    const content = readFileSync(`./data/posts/${file}`, "utf-8");
    return {
      slug: matter(content).data.path,
    };
  });
  return paths;
};

export const getPost = async (slug: string): Promise<GetPost> => {
  const content = readFileSync(`./data/posts/${slug}.md`, "utf-8");

  return {
    metaData: matter(content).data as Post,
    contents: matter(content).content as string,
  };
};
