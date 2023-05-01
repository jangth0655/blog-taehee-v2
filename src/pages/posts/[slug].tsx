import Layout from '@/components/Layout';
import { getPostPaths } from '@/service/posts';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export default function Post() {
  return (
    <Layout>
      <h1>Post</h1>
    </Layout>
  );
}

type Params = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const params = await getPostPaths();
  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      slug: context.params,
    },
  };
};
