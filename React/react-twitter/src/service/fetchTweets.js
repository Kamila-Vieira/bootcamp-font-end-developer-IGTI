import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://localhost:3001/tweets';

async function fetchTweets(){
  const response = await axios.get(API_URL);
  const json = await response.data;

  const tweets = json.map((tweet) => {
    const { id, value } = tweet;

    return {
      ...tweet,
      id,
      value,
      isDeleted: false,
    };
  });

  let allTweets = new Set();
  tweets.forEach((tweet) => allTweets.add(tweet.value));
  allTweets = Array.from(allTweets);
  return allTweets;
}

async function createTweet(tweet){
  const response = await axios.post(API_URL, {id: uuidv4, value: tweet });
  return response.data;
}

async function deleteTweet(tweet) {
  const response = await axios.delete(`${API_URL}/${tweet.id}`);
  return response.data;
}


export { fetchTweets, createTweet, deleteTweet };