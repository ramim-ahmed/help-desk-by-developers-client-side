import CreatePost from "@/components/CreatePost";
import { TPostType } from "@/types";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  const postTypes: TPostType[] = [
    {
      title: "All",
    },
    {
      title: "Bugs",
    },
    {
      title: "Feature Request",
    },
    {
      title: "Improvements",
    },
    {
      title: "Quaries",
    },
  ];
  return (
    <div className="bg-slate-50 min-h-screen pt-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div>
              <CreatePost />
            </div>
            <Outlet />
          </div>
          <div className="col-span-4">
            <div>
              <ul className="space-y-6 bg-white p-6 border border-gray-400 border-opacity-15">
                {postTypes.map((postType: TPostType) => (
                  <li
                    className="border p-2 rounded flex items-center justify-between px-4 cursor-pointer"
                    key={postType.title}
                  >
                    <p>{postType.title}</p>
                    <p>9</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
