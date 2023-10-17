import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <div className="post-thumbnail">
            <img src={post.thumbnail} alt={post.title} />
          </div>
          <div className="post-details">
            <h2>{post.title}</h2>
            <p>Author: {post.author}</p>
            <p>Upvotes: {post.upvotes}</p>
            <p>Category: {post.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;