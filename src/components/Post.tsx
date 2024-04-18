import { useAddLikeMutation } from "@/redux/features/like/likeApi";
import { TComment, TPost } from "@/types";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateComment from "./CreateComment";
type PostProps = {
  post: TPost;
};
export default function Post({ post }: PostProps) {
  const [addLike, { isError, isLoading }] = useAddLikeMutation();
  const {
    id,
    uploadImg,
    title,
    content,
    Like,
    Comment,
    user,
    platform,
    postType,
  } = post;

  const handleLike = () => {
    const data = {
      userId: "2b3c6909-b345-47fe-aa25-c153f292369c",
      postId: id,
    };
    addLike(data);
  };

  if (isError) {
    return <h1>Like Failed!!</h1>;
  }
  return (
    <div className="border-b">
      <div className="bg-white hover:bg-gray-50 duration-300 hover:duration-300 p-6 border-gray-400 border-opacity-15">
        <div className="flex items-center space-x-3">
          <img
            className="w-11 h-11 object-cover rounded-full"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div>
            <h3 className="text-lg font-medium">{user.name}</h3>
            <p className="text-sm -mt-1">an hour ago</p>
          </div>
        </div>
        <Dialog>
          <DialogTrigger>
            <div className="mt-4 cursor-pointer text-start">
              <h2 className="text-lg font-semibold">{title}</h2>
              <h3 className="text-gray-600 mt-4">{content}</h3>
              {uploadImg && (
                <div className="mt-4">
                  <img src={uploadImg} className="" alt="" />
                </div>
              )}
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <div className="mt-4 cursor-pointer text-start">
                  <h2 className="text-lg font-semibold text-black">{title}</h2>
                  <h3 className="text-gray-600 mt-4 text-base">{content}</h3>
                  {uploadImg && (
                    <div className="mt-4">
                      <img src={uploadImg} className="" alt="" />
                    </div>
                  )}
                  <CreateComment postId={id} />
                  <div>
                    <p className="font-semibold mb-4">
                      Comment: {Comment.length || 0}
                    </p>
                    {Comment?.map((comment: TComment) => (
                      <div key={comment.id} className="mt-2 mb-4 w-full">
                        <div className="flex items-center space-x-3 w-full">
                          <div>
                            <img
                              className="w-10 h-10 object-cover rounded-full"
                              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center space-x-3">
                            <h2 className="font-medium text-black ">Rohit</h2>
                            <p>a day ago</p>
                          </div>
                        </div>
                        <div className="pl-14">
                          <p className=" bg-gray-200 rounded-lg px-4 py-1">
                            {comment.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div className="flex justify-between items-center text-gray-600 mt-4">
          <div className="flex items-center space-x-5">
            <button type="button">{Comment.length || 0} Comments</button>
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              <div
                onClick={() => handleLike()}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <HandThumbUpIcon className="w-6 h-6 text-gray-400" />
                <p>{Like.length || 0}</p>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-5">
            <button
              type="button"
              className="border-gray-400 border border-opacity-15 rounded-md px-6 py-1 bg-gray-50 font-medium"
            >
              {platform.title}
            </button>
            <button
              type="button"
              className="border-gray-400 border border-opacity-15 rounded-md px-6 py-1 bg-gray-50 font-medium"
            >
              {postType.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
