import { useCreateCommentMutation } from "@/redux/features/comment/commentApi";
import { Button } from "./ui/button";
import { useState } from "react";
type CreateCommentProps = {
  postId: string;
};
export default function CreateComment({ postId }: CreateCommentProps) {
  const [createComment, { isLoading, isError }] = useCreateCommentMutation();
  const [comment, setComment] = useState("");
  if (isLoading) {
    return <h1>loading.......</h1>;
  }
  if (isError) {
    return <h1>comment failed</h1>;
  }

  const handleComment = () => {
    const data = {
      title: comment,
      userId: "2b3c6909-b345-47fe-aa25-c153f292369c",
      postId: postId,
      commentDate: new Date(),
    };
    createComment(data);
  };

  return (
    <div className="relative my-4">
      <textarea
        onChange={(e) => setComment(e.target.value)}
        id="message"
        name="message"
        placeholder="What's on your mind?"
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
      <div className="flex justify-end">
        <Button onClick={() => handleComment()}>Comment</Button>
      </div>
    </div>
  );
}
