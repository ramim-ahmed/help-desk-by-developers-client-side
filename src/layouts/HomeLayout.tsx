import CreatePost from "@/components/CreatePost";
import { useFetchPostTypesQuery } from "@/redux/features/postType/postTypeApi";
import { TPostType } from "@/types";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
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
  return (
    <div className="bg-slate-50 min-h-screen pt-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div>
              <CreatePost />
            </div>
            <Outlet />
          </div>
          <div className="col-span-4">
            <div>
              <ul className="space-y-6 bg-white p-6 border border-gray-400 border-opacity-15">
                {content}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
