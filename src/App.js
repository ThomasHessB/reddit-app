import React from "react";
import Header from "./components/Header"; // Import the Header component
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import Subreddit from "./components/Subreddit";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333", // Set the primary color to dark grey or black
    },
    // Add other palette options if needed
  },
});

function App() {
  const posts = [
    {
      id: 1,
      title: "Sample Post 1",
      author: "User 1",
      upvotes: 100,
      category: "Technology",
      thumbnail: "/path/to/thumbnail-1.png",
      description: "Description for post 1",
      details: "Details for post 1",
    },
    {
      id: 2,
      title: "Sample Post 2",
      author: "User 2",
      upvotes: 150,
      category: "Science",
      thumbnail: "/path/to/thumbnail-2.png",
      description: "Description for post 2",
      details: "Details for post 2",
    },
  ];

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Subreddit />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
