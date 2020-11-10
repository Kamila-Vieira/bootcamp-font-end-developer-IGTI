import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { fetchTweets, createTweet, deleteTweet } from '../../service/fetchTweets';

export default function Tweet({allTweets}) {
  const [tweets, setTweets] = useState(allTweets);
  const [removeTweets, setRemoveTweets] = useState(allTweets);
  const [newTweet, setNewTweet] = useState(allTweets);
  
  useEffect(() => {
  }, [tweets]);

      function listAllTweets(){
        return fetchTweets().then(item => setTweets(item));
      }
      listAllTweets();
      
      function createNewTweet(){
        let textAreaValue = document.querySelector('textarea');
        return createTweet(textAreaValue.value).then(item => {
          setNewTweet(item);
        });
      }
/*       function removeTweet(){
        return deleteTweet(textAreaValue.value).then(item => {
          setNewTweet(item);
        });
      } */

  return (
    <div id={style.container}>
      <label htmlFor="tweet">Escreva seu tweet: </label>
      <textarea name="tweet" id={style.tweet_textarea} cols="30" rows="10" maxLength="280"></textarea>
      <button className={style.tweet_button} onClick={createNewTweet}>Tweetar</button>
      <div>
        {tweets.map((item) => {
          //console.log(item.id)
          return (
            <ul key={item.id}>
              <li>
                {item.value}
                <button>Excluir</button>
              </li>
            </ul>)
          })}
      </div>
    </div>
  )
}
