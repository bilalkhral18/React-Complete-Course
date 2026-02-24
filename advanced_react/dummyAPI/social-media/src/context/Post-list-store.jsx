import { createContext, useCallback, useReducer } from "react";

export const PostListStore = createContext(null);
const postListReducer = (currpostlist, action) => {
  if (action.type === "DELETE_POST") {
    return currpostlist.filter((post) => post.id !== action.payload);
  }

  if (action.type === "ADD_POST") {
    return [action.payload, ...currpostlist];
  }

  if (action.type === "ADD_INITIAL_POST") {
    return action.payload;
  }

  return currpostlist;
};
const PostListStoreProvider = ({ children }) => {
  const [postlist, dispatch] = useReducer(postListReducer, []);
  const addinitialpost = (posts) => {
    dispatch({
      type: "ADD_INITIAL_POST",
      payload: posts,
    });
  };
  const addpost = (id, userId, title, body, reactions, tags) => {
    dispatch({
      type: "ADD_POST",
      payload: { id, userId, title, body, reactions, tags },
    });
  };
  const deletepost = useCallback(
    (postId) => {
      console.log(postId);
      console.log("function repaint");
      dispatch({ type: "DELETE_POST", payload: postId });
    },
    [dispatch],
  );
  return (
    <PostListStore.Provider
      value={{ postlist, deletepost, addpost, addinitialpost }}
    >
      {children}
    </PostListStore.Provider>
  );
};
// const Default_POST_LIST = async function () {
//   try {
//     let respons = await fetch("https://dummyjson.com/posts");
//     let data = await respons.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const Default_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to mumbai",
//     content:
//       "Hey bro i am going to mumbai this weekend because i have some work there",
//     reactions: 2,
//     userId: `U1`,
//     tags: ["travel", "mumbai"],
//     date: "2023-06-10T12:00:00Z",
//   },
//   {
//     id: "2",
//     title: "pass ho gye bhai",
//     content:
//       "4 saal ki mehnat ke baad finally mai pass ho gye apne exams me. is lye parti h meri tarf se",
//     reactions: 3,
//     userId: `U2`,
//     tags: ["pass", "party"],
//     date: "2023-06-10T12:00:00Z",
//   },
//   {
//     id: "3",
//     title: "trip",
//     content:
//       "this trip is going to lahore for 3 days with my friends we are so excited",
//     reactions: 5,
//     userId: `U3`,
//     tags: ["trip", "lahore"],
//     date: "2023-06-10T12:00:00Z",
//   },
// ];
export default PostListStoreProvider;
