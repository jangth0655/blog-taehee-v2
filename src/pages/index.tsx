import Layout from '@/components/Layout';
import PostList from '@/components/PostList';
import { getPosts } from '@/service/posts';
import { NextPage } from 'next';

const HomePage: NextPage = (post) => {
  return (
    <Layout>
      <PostList />
    </Layout>
  );
};

export default HomePage;

export async function getStaticProps() {
  const res = await getPosts();
  console.log(res);
  return {
    props: {
      post: 'post',
    },
  };
}
