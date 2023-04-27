export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: string;
};

export type Posts = {
  posts: Post[];
};
