import Layout from '@/components/Layout';
import PostList from '@/components/PostList';
import { getPosts } from '@/service/posts';
import { Posts } from '@/types/post';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<{ posts: Posts; total: number }> = ({
  posts,
  total,
}) => {
  return (
    <Layout>
      <PostList posts={posts} total={total} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
      total: posts.total,
    },
  };
};

export default HomePage;
