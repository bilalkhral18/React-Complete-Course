import Post from "./Post";
import { PostListStore } from "../context/Post-list-store";
import WellcomeMessage from "./WellcomeMesaage";
import { useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postlist, spinner } = useContext(PostListStore);
  return (
    <>
      {spinner && <LoadingSpinner />}
      {!spinner && postlist.length === 0 && <WellcomeMessage />}
      {!spinner &&
        postlist.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;
