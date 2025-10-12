import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        <li>
          <Link to="/post/1">Post 1</Link>
        </li>
        <li>
          <Link to="/post/2">Post 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
