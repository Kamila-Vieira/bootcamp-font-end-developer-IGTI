import React, { useState, useEffect } from 'react'
import Tweet from './components/Tweet/Tweet'
import * as api from './service/fetchTweets';

export default function App() {
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      document.querySelector('textArea').focus();
      const tweets = await api.fetchTweets();
      setTimeout(() => {
        setAllTweets(tweets);
      }, 1000);
    };
    getTweets();
  }, [allTweets]);

  return (
    <Tweet allTweets={allTweets}/>
  )
}
