import Post from "./Post";
import { PostListStore } from "../context/Post-list-store";
import WellcomeMessage from "./WellcomeMesaage";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const postlist = useLoaderData();
  // const { postlist, spinner } = useContext(PostListStore);
  return (
    <>
      {/* {spinner && <LoadingSpinner />} */}
      {/*!spinner &&*/ postlist.length === 0 && <WellcomeMessage />}
      {
        /*!spinner && */
        postlist.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))
      }
    </>
  );
};
export const postLoader = async () => {
  try {
    const res = await fetch("https://dummyjson.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await res.json();
    return data.posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default PostList;
