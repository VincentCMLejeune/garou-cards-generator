import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GarouContext from "./contexts/GarouContext";

import CharacterSelect from "./Screens/Character Selection/CharacterSelect";
import Game from "./Screens/Game/Game";
import MainMenu from "./Screens/Main menu/MainMenu";

import Carte from "./components/Carte";

import logo from "./logo.png";

import "./App.css";

export default function App() {
  const [villagers, setVillagers] = useState();
  const [garous, setGarous] = useState();
  const [voyante, setVoyante] = useState(false);
  const [sorciere, setSorciere] = useState(false);
  const [chasseur, setChasseur] = useState(false);
  const [cupidon, setCupidon] = useState(false);
  const [fille, setFille] = useState(false);
  const [roster, setRoster] = useState([]);

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
    if (sorciere) {
      rooster.push("sorciere");
    }
    if (chasseur) {
      rooster.push("chasseur");
    }
    if (cupidon) {
      rooster.push("cupidon");
    }
    if (fille) {
      rooster.push("fille");
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
      rooster.map((x, i) => {
        return <Carte type={x} key={i} />;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="app-title">Loup Garou, but make it React</h1>
      </header>
      <GarouContext.Provider
        value={{
          villagers: villagers,
          garous: garous,
          voyante: voyante,
          sorciere: sorciere,
          chasseur: chasseur,
          cupidon: cupidon,
          fille: fille,
          roster: roster,
          setVillagers: setVillagers,
          setGarous: setGarous,
          setVoyante: setVoyante,
          setSorciere: setSorciere,
          setChasseur: setChasseur,
          setCupidon: setCupidon,
          setFille: setFille,
          setRoster: setRoster,
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<MainMenu />} />
            <Route exact path="/selection" element={<CharacterSelect />} />
            <Route exact path="/play" element={<Game />} />
          </Routes>
        </Router>
      </GarouContext.Provider>
    </div>
  );
}
