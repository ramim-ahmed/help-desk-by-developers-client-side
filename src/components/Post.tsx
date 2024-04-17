import { useAddLikeMutation } from "@/redux/features/like/likeApi";
import { TPost } from "@/types";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
type PostProps = {
  post: TPost;
};
export default function Post({ post }: PostProps) {
  const { title, content, Like, Comment } = post;
  const [addLike, { isError, isLoading }] = useAddLikeMutation();
  const handleLike = () => {
    const data = {
      userId: "2b3c6909-b345-47fe-aa25-c153f292369c",
      postId: "1541c961-b358-469e-8f91-9dc8358ac054",
    };
    addLike(data);
  };
  if (isError) {
    return <h1>Like Failed!!</h1>;
  }
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div className="border-b">
      <div className="bg-white hover:bg-gray-50 cursor-pointer duration-300 hover:duration-300 p-6 border-gray-400 border-opacity-15">
        <div className="flex items-center space-x-3">
          <img
            className="w-11 h-11 object-cover rounded-full"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div>
            <h3 className="text-lg font-medium">Ramim Ahmed</h3>
            <p className="text-sm -mt-1">an hour ago</p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <h3 className="text-gray-600 mt-4">{content}</h3>
          <div className="flex justify-between items-center text-gray-600 mt-4">
            <div className="flex items-center space-x-5">
              <button type="button">{Comment.length || 0} Comments</button>
              <div
                onClick={() => handleLike()}
                className="flex items-center space-x-1"
              >
                <HandThumbUpIcon className="w-6 h-6 text-gray-400" />
                <p>{Like.length || 0}</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <button
                type="button"
                className="border-gray-400 border border-opacity-15 rounded-md px-6 py-1 bg-gray-50 font-medium"
              >
                Website
              </button>
              <button
                type="button"
                className="border-gray-400 border border-opacity-15 rounded-md px-6 py-1 bg-gray-50 font-medium"
              >
                Bugs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
