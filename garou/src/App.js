import logo from "./logo.png";
import "./App.css";

import Carte from "./components/Carte";

import React, { useState } from "react";

function App() {
  const [villagers, setVillagers] = React.useState();
  const [garous, setGarous] = React.useState();
  const [voyante, setVoyante] = React.useState(false);
  const [roster, setRoster] = React.useState("");

  let rooster = [];

  const generate = (e) => {
    e.preventDefault();
    for (let i = 0; i < Number(villagers); i++) {
      rooster.push("villageois");
    }
    for (let i = 0; i < Number(garous); i++) {
      rooster.push("garou");
    }
    if (voyante) {
      rooster.push("voyante");
    }

    let currentIndex = rooster.length;
    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [rooster[currentIndex], rooster[randomIndex]] = [
        rooster[randomIndex],
        rooster[currentIndex],
      ];
    }

    setRoster(
      rooster.map((x) => {
        return <Carte type={x} />;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <form onSubmit={generate}>
        <div className="options-selector">
          <div className="character-count">
            <label htmlFor="villagers">Villaegois</label>
            <input
              className="number-input"
              type="number"
              onChange={(e) => setVillagers(e.target.value)}
            ></input>
          </div>
          <div className="character-count">
            <label htmlFor="garou">Loup-garous</label>
            <input
              className="number-input"
              type="number"
              onChange={(e) => setGarous(e.target.value)}
            ></input>
          </div>
          <div className="character-count">
            <label htmlFor="voyante">Voyante</label>
            <input
              type="checkbox"
              onChange={(e) => setVoyante(!voyante)}
            ></input>
          </div>
        </div>
        <button type="submit">LET'S GO !</button>
      </form>
      <div className="cards-container">{roster}</div>
    </div>
  );
}

export default App;
