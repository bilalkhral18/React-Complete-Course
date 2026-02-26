import { useContext, useEffect, useState } from "react";
import { PostListStore } from "../context/Post-list-store";
import { useNavigate } from "react-router-dom";
const Form = ({ activeoption }) => {
  const navigate = useNavigate();
  const { addpost } = useContext(PostListStore);
  const [userId, setuserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setContent] = useState("");
  const [reactions, setReactions] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const handleUserId = (event) => {
    setuserId(event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleContent = (event) => {
    setContent(event.target.value);
  };
  const handleReactions = (event) => {
    setReactions(event.target.value);
  };
  const handleTagKeyDown = (e) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault(); // prevent actual space in input

      const newTag = tagInput.trim(); // remove extra spaces
      if (newTag !== "" && !tags.includes(newTag)) {
        setTags([...tags, newTag]); // add to array
      }

      setTagInput(""); // clear input
    }
  };
  const handleFormData = (event) => {
    event.preventDefault();
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        title,
        body,
        reactions: {
          likes: Number(reactions),
          dislikes: 0,
        },
        tags,
      }),
    })
      .then((res) => res.json())
      .then((resObj) => {
        addpost(resObj);
        navigate("/");
      });
    setuserId("");
    setTitle("");
    setContent("");
    setReactions("");
    setTags("");
  };
  // if (activeoption !== "CreatePost") return null;
  return (
    <form className="row g-3 form" onSubmit={(event) => handleFormData(event)}>
      <div className="col-md-6">
        <label htmlFor="userId" className="form-label">
          UserId:
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Please enter userId..."
          onChange={(event) => handleUserId(event)}
          value={userId}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter title here..."
          onChange={(event) => handleTitle(event)}
          value={title}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="content" className="form-label">
          Body Content:
        </label>
        <textarea
          rows={5}
          className="form-control"
          id="content"
          placeholder="Content of body..."
          onChange={(event) => handleContent(event)}
          value={body}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="reactions" className="form-label">
          Reactions:
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post."
          onChange={(event) => handleReactions(event)}
          value={reactions}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="tags" className="form-label">
          Tags:
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter tags by space..."
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
          value={tagInput}
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </div>
    </form>
  );
};

export default Form;
