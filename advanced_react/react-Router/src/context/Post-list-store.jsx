import {
  createContext,
  useCallback,
  useReducer,
  /*useState,
  useEffect,*/
} from "react";

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
  // const [spinner, setspinner] = useState(false);
  // const addinitialpost = (posts) => {
  //   dispatch({
  //     type: "ADD_INITIAL_POST",
  //     payload: posts,
  //   });
  // };
  const addpost = (post) => {
    dispatch({
      type: "ADD_POST",
      payload: post,
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
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   setspinner(true);
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addinitialpost(data.posts);
  //       setspinner(false);
  //     });
  //   return () => {
  //     controller.abort();
  //     console.log("clean up called");
  //   };
  // }, []);
  return (
    <PostListStore.Provider
      value={{ postlist, deletepost, addpost /* spinner */ }}
    >
      {children}
    </PostListStore.Provider>
  );
};
export default PostListStoreProvider;
