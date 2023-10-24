import axios from "axios";

const BASE_URL = "https://www.reddit.com";

export const fetchSubredditData = (subreddit) => {
  const url = `${BASE_URL}/r/${subreddit}.json`;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching subreddit data", error);
      throw error;
    });
};
