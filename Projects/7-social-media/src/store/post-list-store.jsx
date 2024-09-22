import { createContext, useReducer } from "react";

 const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () =>{},
 });

 const PostListProvider = ({children}) => {

   const [postList,dispatchPostList] = useReducer();
    
   const addPost = () =>{

   }

   const deletePost = () =>{

   }
   
   return <PostList.Provider value={{postList, addPost,deletePost}} >{children}</PostList.Provider>
 }

 export default PostListProvider;