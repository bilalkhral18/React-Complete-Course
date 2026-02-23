import Post from "./Post";
import { useEffect, useState } from "react";
import { PostListStore } from "../context/post-list-store";
import WellcomeMessage from "./WellcomeMesaage";
import { useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postlist, addinitialpost } = useContext(PostListStore);
  const [spinner, setspinner] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setspinner(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addinitialpost(data.posts);
        setspinner(false);
      });
    return () => {
      controller.abort();
      console.log("clean up called");
    };
  }, []);
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
