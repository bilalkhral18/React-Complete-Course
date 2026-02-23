import { MdDelete } from "react-icons/md";
import { PostListStore } from "../context/post-list-store";
import { useContext } from "react";
const Post = ({ post }) => {
  const { deletepost } = useContext(PostListStore);
  return (
    <div className="card post" style={{ width: "35rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletepost(post.id)}
        >
          <MdDelete />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => {
          return (
            <button
              type="button"
              className="btn btn-primary tag-btn"
              key={index}
            >
              {tag}
            </button>
          );
        })}
        <div className="alert alert-success reactions" role="alert">
          This post is reacted by{" "}
          {post.reactions?.likes + post.reactions?.dislikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
