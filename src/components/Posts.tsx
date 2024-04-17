import { useFetchPostsQuery } from "@/redux/features/post/postApi";
import Post from "./Post";
import { TPost } from "@/types";

export default function Posts() {
  const { data, isLoading, isError } = useFetchPostsQuery(undefined);
  const posts = data?.data;
  //   decide what to render
  let content;
  if (isLoading) {
    content = <h1>loading.....</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>Internal sever Error!!</h1>;
  }
  if (!isLoading && !isError && posts.length <= 0) {
    content = <h1>Data Not Found!!!</h1>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = posts.map((post: TPost) => <Post key={post.id} post={post} />);
  }
  return <div className="border rounded-md mt-4">{content}</div>;
}
