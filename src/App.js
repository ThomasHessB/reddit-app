import React from "react";
import Header from "./components/Header"; // Import the Header component
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const posts = [
    {
      id: 1,
      title: "Sample Post 1",
      author: "User 1",
      upvotes: 100,
      category: "Technology",
      thumbnail: "/path/to/thumbnail-1.png",
    },
    {
      id: 2,
      title: "Sample Post 2",
      author: "User 2",
      upvotes: 150,
      category: "Science",
      thumbnail: "/path/to/thumbnail-2.png",
    },
  ];

  const post = {
    title: "Sample Post",
    author: "User 1",
    upvotes: 200,
    category: "Technology",
    thumbnail: "/path/to/thumbnail.png",
    content: "This is the detailed content of the post.",
    // Add comments data if needed
  };

  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
      <PostDetail post={post} />
      <Footer />
    </div>
  );
}

export default App;
