import { Post } from "@/types/post";
import { formatMMMdYYYt } from "@/utils/dateFormat";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  post: Post;
};

const STANDARD_LENGTH = 100;

export default function PostItem({ post }: Props) {
  const router = useRouter();
  const { category, date, description, featured, path, title } = post;

  const handleRoute = useCallback(() => {
    router.push(`/posts/${path}`);
  }, [path, router]);

  const sliceDescriptionLength = description.slice(0, 110).length;
  const sliceDescription = description.slice(0, 110);

  return (
    <li className="mb-16 last:mb-0 xl:flex items-start justify-between space-y-2 xl:space-y-0 xl:space-x-12">
      <div className="mt-2 px-1 mb-2 md:mb-0 flex md:w-[30%]">
        <span className="text-gray-400 text-md">{formatMMMdYYYt(date)}</span>
      </div>

      <div className="w-[60%]">
        <div className="flex flex-col">
          <div>
            <span
              onClick={handleRoute}
              className="text-neutral-800 font-bold text-2xl cursor-pointer dark:text-white"
            >
              {title}
            </span>
          </div>
          <span className="text-emerald-600 opacity-80">{category}</span>
        </div>
        {post.image && (
          <div className="my-2 relative w-96 h-64">
            <Image
              src={post.image}
              fill
              alt="blog"
              style={{ borderRadius: 8, objectFit: "cover" }}
              priority
            />
          </div>
        )}
        <p className="text-gray-500 dark:text-gray-300 mt-6 text-ellipsis overflow-hidden ">
          {sliceDescriptionLength < STANDARD_LENGTH
            ? sliceDescription
            : `${sliceDescription}...`}
        </p>
        <div className="mt-2 dark:text-teal-500 text-teal-600 font-bold">
          <Link
            href={`/posts/${path}`}
            as={`/posts/${path}`}
            className="flex items-center  hover:text-teal-500 transition-all dark:hover:text-teal-300"
          >
            <span className="inline-block mr-2">Read more </span>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </li>
  );
}
