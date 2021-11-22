import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GarouContext from "./contexts/GarouContext";

import CharacterSelect from "./Screens/Character Selection/CharacterSelect";
import Game from "./Screens/Game/Game";
import MainMenu from "./Screens/Main menu/MainMenu";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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

  return (
    <div className="App">
      <Router>
        <Header />
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
          <Routes>
            <Route exact path="/" element={<MainMenu />} />
            <Route exact path="/selection" element={<CharacterSelect />} />
            <Route exact path="/play" element={<Game />} />
          </Routes>
        </GarouContext.Provider>
      </Router>
      <Footer />
    </div>
  );
}
