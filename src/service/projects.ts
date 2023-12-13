import { Post } from "@/types/post";
import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

export type GetProjects = {
  data: Post[];
  total: number;
};

type GetPost = { metaData: Post; contents: string };

export const getProjects = async (): Promise<GetProjects | undefined> => {
  if (!existsSync("./data/projects")) return;
  const filePath = readdirSync("./data/projects");
  const projects = filePath.map((fileName) => {
    const content = readFileSync(`./data/projects/${fileName}`, "utf-8");

    const [slug, _] = fileName.split(".");
    return {
      ...matter(content).data,
      date: matter(content).data.date.toISOString(),
      slug,
    };
  });

  return {
    data: projects as Post[],
    total: projects?.length,
  };
};

export const getProjectPaths = async (): Promise<{ slug: string }[]> => {
  const files = readdirSync("./data/projects");
  const paths = files.map((file) => {
    const content = readFileSync(`./data/projects/${file}`, "utf-8");
    return {
      slug: matter(content).data.path,
    };
  });
  return paths;
};

export const getProject = async (slug: string): Promise<GetPost> => {
  const content = readFileSync(`./data/projects/${slug}.md`, "utf-8");

  return {
    metaData: matter(content).data as Post,
    contents: matter(content).content as string,
  };
};
