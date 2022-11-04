import { Link } from "react-router-dom";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postInfos">
        <div className="postInfosLeft">
          <img
            src="https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="postImg"
          />
        </div>
        <div className="postInfosRight">
          <Link className="link" to="/posts/123">
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <p className="postDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              fuga ut eius. Ipsam aspernatur dolorem, deserunt, dignissimos
              quibusdam accusamus culpa obcaecati doloremque similique voluptas
              a saepe dolor esse fuga quaerat.
            </p>
          </Link>
          <div className="postInfosBottom">
            <div className="postCats">
              <span className="postCat">JSON</span>
              <span className="postCat">API</span>
            </div>
            <span className="postDate">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
