import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {/* Ensure that post.tags is an array and map through it */}
        {Array.isArray(post.tags) &&
          post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}

        {/* Display reactions as a number if available */}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by{" "}
          {typeof post.reactions === "number" ? post.reactions : 0} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
