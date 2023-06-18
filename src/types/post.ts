export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: string;
  slug?: string;
};

export type Posts = {
  data: Post[];
};
