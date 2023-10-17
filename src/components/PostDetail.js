import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <div className="post-thumbnail">
        <img src={post.thumbnail} alt={post.title} />
      </div>
      <div className="post-details">
        <p>Author: {post.author}</p>
        <p>Upvotes: {post.upvotes}</p>
        <p>Category: {post.category}</p>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      {/* Add comments section if needed */}
    </div>
  );
};

export default PostDetail;
