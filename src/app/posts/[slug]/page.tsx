import { getPost, getPostPaths } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const post = await getPost(params.slug);
  return <h1>{params.slug}</h1>;
}

export async function generateStaticParams() {
  return await getPostPaths();
}
