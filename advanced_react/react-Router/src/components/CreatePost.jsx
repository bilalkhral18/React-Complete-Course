import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  return (
    <Form
      className="row g-3 form"
      method="POST" /*onSubmit={(event) => handleFormData(event)}*/
    >
      <div className="col-md-6">
        <label htmlFor="userId" className="form-label">
          UserId:
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Please enter userId..."
          // onChange={(event) => handleUserId(event)}
          // value={userId}
          name="userId"
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
          // onChange={(event) => handleTitle(event)}
          // value={title}
          name="title"
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
          // onChange={(event) => handleContent(event)}
          // value={body}
          name="body"
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
          // onChange={(event) => handleReactions(event)}
          // value={reactions}
          name="reactions"
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
          // onChange={(e) => setTagInput(e.target.value)}
          // onKeyDown={handleTagKeyDown}
          // value={tagInput}
          name="tags"
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </div>
    </Form>
  );
};
export const createPost = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
};

export default CreatePost;
