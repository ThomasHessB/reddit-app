import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { fetchSubredditData } from "./RedditAPI";

import "./SubredditStyles.css";

const SubredditPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
}));

const Subreddit = () => {
  const [subredditData, setSubredditData] = useState(null);

  useEffect(() => {
    fetchSubredditData("react")
      .then((data) => {
        console.log("Data from Reddit API:", data); // Log the data
        setSubredditData(data);
      })
      .catch((error) => {
        console.error("Error fetching subreddit data", error);
      });
  }, []);

  return (
    <SubredditPaper elevation={3} className="subreddit-paper">
      <Avatar
        sx={{ bgcolor: red[500] }}
        aria-label="subreddit"
        className="subreddit-avatar"
      >
        R
      </Avatar>
      <Typography variant="h6" component="div" className="subreddit-title">
        ReactJS
      </Typography>
      {subredditData && (
        <div className="subreddit-info">
          <Typography color="text.secondary" className="subreddit-info-item">
            Subscribers: {subredditData.data.subscribers}
          </Typography>
          <Typography color="text.secondary" className="subreddit-info-item">
            Online: {subredditData.data.active_user_count}
          </Typography>
        </div>
      )}
    </SubredditPaper>
  );
};

export default Subreddit;
