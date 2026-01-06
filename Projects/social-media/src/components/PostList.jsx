import Post from "./Post";
import { PostListStore } from "../context/post-list-store";
import { useContext } from "react";
const PostList = ({ activeoption }) => {
  if (activeoption !== "Home") return null;
  const { postlist } = useContext(PostListStore);
  return (
    <>
      {postlist.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
