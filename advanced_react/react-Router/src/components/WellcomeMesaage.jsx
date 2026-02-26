function WellcomeMessage({ onGetPosts }) {
  return (
    <center className="wellcommessage">
      <h1>There are no posts</h1>
      {/* <button type="button" className="btn btn-primary" onClick={onGetPosts}>
        Fetch posts from server
      </button> */}
    </center>
  );
}
export default WellcomeMessage;
