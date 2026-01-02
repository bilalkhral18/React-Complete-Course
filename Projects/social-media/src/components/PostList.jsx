import Post from "./Post";

const PostList = ({ activeoption }) => {
  if (activeoption !== "Home") return null;
  return (
    <>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </>
  );
};
export default PostList;
