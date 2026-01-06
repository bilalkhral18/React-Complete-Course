import { act, createContext, useReducer } from "react";

export const PostListStore = createContext(null);
const postListReducer = (currpostlist, action) => {
  let updatedpostlist = currpostlist;
  if (action.type === "DELETE_POST") {
    updatedpostlist = currpostlist.filter((post) => {
      return post.id !== action.payload;
    });
  }
  if (action.type === "ADD_POST") {
    updatedpostlist = [action.payload, ...currpostlist];
  }
  return updatedpostlist;
};
const PostListStoreProvider = ({ children }) => {
  const addpost = (id, userId, title, content, reactions, tags) => {
    dispatch({
      type: "ADD_POST",
      payload: { id, userId, title, content, reactions, tags },
    });
  };
  const deletepost = (postId) => {
    console.log(postId);
    dispatch({ type: "DELETE_POST", payload: postId });
  };
  const [postlist, dispatch] = useReducer(postListReducer, Default_POST_LIST);
  return (
    <PostListStore.Provider value={{ postlist, deletepost, addpost }}>
      {children}
    </PostListStore.Provider>
  );
};

const Default_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    content:
      "Hey bro i am going to mumbai this weekend because i have some work there",
    reactions: 2,
    userId: `U1`,
    tags: ["travel", "mumbai"],
    date: "2023-06-10T12:00:00Z",
  },
  {
    id: "2",
    title: "pass ho gye bhai",
    content:
      "4 saal ki mehnat ke baad finally mai pass ho gye apne exams me. is lye parti h meri tarf se",
    reactions: 3,
    userId: `U2`,
    tags: ["pass", "party"],
    date: "2023-06-10T12:00:00Z",
  },
  {
    id: "3",
    title: "trip",
    content:
      "this trip is going to lahore for 3 days with my friends we are so excited",
    reactions: 5,
    userId: `U3`,
    tags: ["trip", "lahore"],
    date: "2023-06-10T12:00:00Z",
  },
];
export default PostListStoreProvider;
