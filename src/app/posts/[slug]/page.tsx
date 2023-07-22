import PostDetail from '@/components/PostDetail';
import { getPost, getPostPaths } from '@/service/posts';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {
    metaData: { title, description },
  } = await getPost(params.slug);
  return {
    title,
    description,
  };
}

export default async function Post({ params }: Props) {
  const { contents, metaData } = await getPost(params.slug);

  return <PostDetail contents={contents} metaData={metaData} />;
}

export async function generateStaticParams() {
  const result = await getPostPaths();

  return result.map((path) => ({
    slug: path.slug,
  }));
}
