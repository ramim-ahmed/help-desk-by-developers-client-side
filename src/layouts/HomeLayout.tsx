import CreatePost from "@/components/CreatePost";
import PostType from "@/components/PostType";
import { Outlet } from "react-router-dom";
export default function HomeLayout() {
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
            <div className="sticky top-20 z-10">
              <ul className="space-y-6 bg-white p-6 border border-gray-400 border-opacity-15">
                <PostType />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
