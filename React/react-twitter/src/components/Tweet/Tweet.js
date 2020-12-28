import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { fetchTweets, createTweet, deleteTweet } from '../../service/fetchTweets';

export default function Tweet({allTweets}) {
  const [tweets, setTweets] = useState(allTweets);
  const [removeTweets, setRemoveTweets] = useState(allTweets);
  const [newTweet, setNewTweet] = useState(allTweets);
  const [value, setValue] = useState(0);
  
  async function listAllTweets(){
    await fetchTweets().then(item => setTweets(item));
  }
  function countChar(){
    const textAreaValue = document.querySelector('textarea');
    setValue(textAreaValue.value);
  }
  async function createNewTweet(){
    const textAreaValue = document.querySelector('textarea');
    await createTweet(textAreaValue.value).then(item => {
      setNewTweet(item);
      textAreaValue.value = '';
      setValue(textAreaValue.value);
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
  }, [newTweet, removeTweets, tweets, value]);

  return (
    <div className={style.container} >
      <div className={style.tweet_container}>
        <label htmlFor="tweet">Escreva seu tweet: </label>
        <textarea name="tweet" id={style.tweet_textarea} cols="50" onInput={countChar}></textarea>
        <span className={value.length >= 280 
          ? style.count_char_large 
          : style.count_char_Small}
        >{isNaN(280 - value.length) ? 280 : 280 - value.length} Caracteres restantes!</span>
        <button className="waves-effect waves-light btn" onClick={createNewTweet}>Tweetar</button>
      </div>
      <div className={style.tweets_list}>
        {tweets.map((item) => {
          if(item.value.length !== 0){
            return (
              <ul key={item.id}>
                <li className="card-panel">
                  {item.value}
                  <i onClick={(e) => removeTweet(item, e)} className="material-icons">delete</i>
                </li>
              </ul>)
          }
        })}
      </div>
    </div>
  )
}
