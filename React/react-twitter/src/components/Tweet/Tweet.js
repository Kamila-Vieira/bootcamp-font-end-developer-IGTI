import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { fetchTweets, createTweet, deleteTweet } from '../../service/fetchTweets';

export default function Tweet({allTweets}) {
  const [tweets, setTweets] = useState(allTweets);
  const [removeTweets, setRemoveTweets] = useState(allTweets);
  const [newTweet, setNewTweet] = useState(allTweets);
  
  async function listAllTweets(){
    await fetchTweets().then(item => setTweets(item));
  }
  
  async function createNewTweet(){
    let textAreaValue = document.querySelector('textarea');
    await createTweet(textAreaValue.value).then(item => {
      setNewTweet(item);
      textAreaValue.value = '';
    });
  }
  async function removeTweet(item){
    await deleteTweet(item.id).then(item => {
      setRemoveTweets(item);
    });
  }
  
  useEffect(() => {
    let didCancel = false ;
    listAllTweets();
    if (!didCancel) return;
    createNewTweet();
    removeTweet();
    return () => { didCancel = true; };
  }, [newTweet, removeTweets, tweets]);

  return (
    <div className="container" >
      <label htmlFor="tweet">Escreva seu tweet: </label>
      <textarea name="tweet" id={style.tweet_textarea} cols="50" maxLength="280"></textarea>
      <button className="waves-effect waves-light btn" onClick={createNewTweet}>Tweetar</button>
      <div>
        {tweets.map((item) => {
          return (
            <ul key={item.id}>
              <li className="card-panel">
                {item.value}
                <i onClick={(e) => removeTweet(item, e)} className="material-icons">delete</i>
              </li>
            </ul>)
          })}
      </div>
    </div>
  )
}
