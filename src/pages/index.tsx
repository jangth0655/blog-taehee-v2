import Layout from '@/components/Layout';
import PostList from '@/components/PostList';
import { getPosts } from '@/service/posts';
import { Posts } from '@/types/post';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<{ posts: Posts }> = ({ posts }) => {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
