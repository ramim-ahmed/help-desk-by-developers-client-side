import { useFetchPostTypesQuery } from "@/redux/features/postType/postTypeApi";
import { TPostType } from "@/types";

export default function PostType() {
  const { data, isLoading, isError } = useFetchPostTypesQuery(undefined);
  const postTypes = data?.data;
  let content;
  if (isLoading) {
    content = <h1>loading.....</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>Internal sever Error!!</h1>;
  }
  if (!isLoading && !isError && postTypes.length <= 0) {
    content = <h1>Data Not Found!!!</h1>;
  }
  if (!isLoading && !isError && postTypes.length > 0) {
    content = postTypes.map((postType: TPostType) => (
      <li
        className="border p-2 rounded flex items-center justify-between px-4 cursor-pointer"
        key={postType.title}
      >
        <p>{postType.title}</p>
        <p>0</p>
      </li>
    ));
  }
  return content;
}
