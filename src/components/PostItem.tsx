import { Post } from '@/types/post';
import { dateFormat } from '@/utils/dateFormat';

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { category, date, description, featured, path, title } = post;
  return (
    <li key={path}>
      <span>{dateFormat(date)}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  );
}
