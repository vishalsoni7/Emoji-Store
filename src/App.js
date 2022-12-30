import React, { useState } from "react";
import "./styles.css";

const emojiVocabulary = {
  "😄": "Grinning Face",
  "🤣": "Rolling on the Floor Laughing ",
  "😆": "Grinning Squinting Face",
  "😶‍🌫️": "Face in Clouds",
  "😇": "Smiling Face with Halo",
  "🤗": "Smiling Face with Open Hands",
  "🤨": "Face with Raised Eyebrow",
  "😵‍💫": "Face with Spiral Eyes",
  "🤕": "Face with Head-Bandage",
  "🤥": "Lying Face"
};

const emojis = Object.keys(emojiVocabulary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation to be here...");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiVocabulary) {
      setMeaning(emojiVocabulary[inputEmoji]);
    } else {
      setMeaning("oops I failed to recognise you'r emoji 🤕");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiVocabulary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        The <sub>⬆</sub>Upside Down<sup>⬇</sup>{" "}
      </h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          marginBlock: "2em",
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
