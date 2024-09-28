import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const Navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();
  const reactionsElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const likes = likesElement.current.value;
    const reactions = reactionsElement.current;
    const dislikes = dislikesElement.current.value;
    const tags = tagsElement.current.value.split(" ");


    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions:{likes,dislikes},
        likes: likes,
        dislikes: dislikes,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        console.log("Got response from the server", post);
        addPost(post);
        Navigate("/");
      });
     
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Post Titel
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Number of Likes
        </label>
        <input
          type="text"
          ref={likesElement}
          className="form-control"
          id="likes"
          placeholder="How many people Liked this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">
          Number of dislikes
        </label>
        <input
          type="text"
          ref={dislikesElement}
          className="form-control"
          id="dislikes"
          placeholder="How many people dislike this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hastags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
