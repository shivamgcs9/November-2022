import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      <div className="postInfos">
        <div className="postInfosLeft">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="postImg" />
          )}
        </div>
        <div className="postInfosRight">
          <Link className="link" to={`/posts/${post._id}`}>
            <span className="postTitle">{post.title}</span>
            <p className="postDesc">{post.desc}</p>
          </Link>
          <div className="postInfosBottom">
            <div className="postCats">
              {post.categories.map((c) => (
                <span className="postCat">{c}</span>
              ))}
            </div>
            <span className="postDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
