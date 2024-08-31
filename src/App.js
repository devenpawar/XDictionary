import "./App.css";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const onSearchHandler = () => {
    const wordList = [
      {
        word: "React",
        meaning: "A JavaScript library for building user interfaces.",
      },
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." },
    ];

    const foundWord = wordList.find((item) => item.word === word);

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  const inputWordHandler = (e) => {
    setWord(e.target.value);
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        style={{ padding: "0.5rem" }}
        onChange={inputWordHandler}
      />
      <button
        style={{ padding: "0.5rem", marginLeft: "10px" }}
        onClick={onSearchHandler}
      >
        Search
      </button>
      <p style={{ fontWeight: "bold" }}>Definition:</p>
      {definition && <h3>{definition}</h3>}
    </div>
  );
}

export default App;
