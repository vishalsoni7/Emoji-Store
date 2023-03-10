import React, { useState } from "react";
import "./styles.css";

const emojiVocabulary = {
  "π": "Grinning Face",
  "π€£": "Rolling on the Floor Laughing ",
  "π": "Grinning Squinting Face",
  "πΆβπ«οΈ": "Face in Clouds",
  "π": "Smiling Face with Halo",
  "π€": "Smiling Face with Open Hands",
  "π€¨": "Face with Raised Eyebrow",
  "π΅βπ«": "Face with Spiral Eyes",
  "π€": "Face with Head-Bandage",
  "π€₯": "Lying Face"
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
      setMeaning("oops I failed to recognise you'r emoji π€");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiVocabulary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        The <sub>β¬</sub>Upside Down<sup>β¬</sup>{" "}
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
