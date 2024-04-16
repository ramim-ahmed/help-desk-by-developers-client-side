import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
export default function Nav() {
  return (
    <nav className="border-b">
      <div className="flex justify-between items-center max-w-4xl mx-auto py-3">
        <div>
          <h1 className="text-xl font-semibold">HELP DESK</h1>
        </div>
        <div>
          <div className="flex items-center space-x-2 ">
            <img
              className="w-10 h-10 object-cover rounded-full "
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="font-medium">Hi, User</div>
            <div>
              <ArrowLeftStartOnRectangleIcon className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
