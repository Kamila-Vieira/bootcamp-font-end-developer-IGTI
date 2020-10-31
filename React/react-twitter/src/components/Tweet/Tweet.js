import React from 'react';
import style from './style.module.css';

export default function Tweet({allTweets}) {

  return (
    <div id={style.container}>
      <label htmlFor="tweet">Escreva seu tweet: </label>
      <textarea name="tweet" id={style.tweet_textarea} cols="30" rows="10" maxLength="280"></textarea>
      <button className={style.tweet_button}>Tweetar</button>
      <div>
        {allTweets.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item}</li>
            </ul>)
          })}
      </div>
    </div>
  )
}
