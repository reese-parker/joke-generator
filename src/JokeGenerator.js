import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles/JokeGeneratorStyles";
import Joke from "./Joke";
import laughingEmoji from "./laughingEmoji";

export default function JokeGenerator() {
  const [joke, setJoke] = useState("");

  const getJokes = async () => {
    try {
      await axios
        .get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" },
        })
        .then(({ data }) => {
          setJoke({ text: data.joke });
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetJokeClick = () => {
    getJokes();
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div style={styles.container}>
      <Joke text={joke.text} />
      <svg
        style={styles.emojiContainer}
        id="emoji"
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
      >
        {laughingEmoji}
      </svg>
      <button style={styles.button} onClick={handleGetJokeClick}>
        Get Another Joke
      </button>
    </div>
  );
}
