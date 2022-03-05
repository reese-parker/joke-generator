import React from "react";
import styles from "./styles/JokeStyles";

export default function Joke(props) {
  const { text } = props;

  return <p style={styles.p}>{text}</p>;
}
