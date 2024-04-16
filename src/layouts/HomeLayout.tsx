import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <div>Create Post</div>
        <Outlet />
      </div>
      <div className="col-span-4">post type lists</div>
    </div>
  );
}
