export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: string;
  slug?: string;
  image?: string;
};

export type Posts = {
  data: Post[];
};
