import { getPost, getPostPaths } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Props) {
  const { contents, metaData } = await getPost(params.slug);

  return <h1>{params.slug}</h1>;
}

export async function generateStaticParams() {
  const result = await getPostPaths();

  return result.map((path) => ({
    slug: path.slug,
  }));
}
