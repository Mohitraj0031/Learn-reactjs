import { useContext,useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostList);

const userIdElement = useRef();
const postTitleElement = useRef();
const postBodyElement = useRef();
const reactionsElement = useRef();
const tagsElement = useRef();

const handleSubmit = (event) =>{
  event.preventDefault();
  const userId = userIdElement.current.value;
  const postTitle = postTitleElement.current.value;
  const postBody = postBodyElement.current.value;
  const reactions = reactionsElement.current.value;
  const tags = tagsElement.current.value.split(/(s)/);

  addPost(userId,postTitle,postBody,reactions, tags);

};
return <form className = "create-post" onSubmit ={handleSubmit}>

<div className="mb-3">
  <label htmlFor="userId" className="form-label">Enter your user Id here</label>
  <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Your User id"/>
 
</div>

<div className="mb-3">
  <label htmlFor="Title" className="form-label">Post Titel</label>
  <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today..."/>
 
</div>

<div className="mb-3">
  <label htmlFor="Body" className="form-label">Post Content</label>
  <textarea type="text" ref={postBodyElement} rows="4" className="form-control" id="body" placeholder="tell us more about it"/>
 
</div>

<div className="mb-3">
  <label htmlFor="reactions" className="form-label">Number of Reaction</label>
  <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post"/>
 
</div>

<div className="mb-3">
  <label htmlFor="tags" className="form-label">Enter your hastags here</label>
  <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter tags using space"/>
 
</div>

<button type="submit" className="btn btn-primary">Post</button>
</form>

}

export default CreatePost;