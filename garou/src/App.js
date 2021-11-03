import logo from "./logo.svg";
import "./App.css";

import Carte from "./components/Carte";

import React, { useState } from 'react'

function App() {

  const [villagers, setVillagers] = React.useState()
  const [garous, setGarous] = React.useState()
  const [voyantes, setVoyantes] = React.useState()
  const [roster, setRoster] = React.useState('')

  let rooster = []

  const generate = (e) => {
    e.preventDefault()
    console.log(villagers)
    console.log(garous)
    console.log(voyantes)
    for (let i = 0 ; i < Number(villagers) ; i++) {
      rooster.push('villageois')
    }
    for (let i = 0 ; i < Number(garous) ; i++) {
      rooster.push('garou')
    }
    for (let i = 0 ; i < Number(voyantes) ; i++) {
      rooster.push('voyante')
    }

    setRoster(rooster.map(x => {
      return <Carte type={x} />
    }))
  }  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <form className="options-selector" onSubmit={generate}>
        <div className="character-count">
          <label htmlFor="villagers">Villaegois</label>
          <input type="number" onChange={(e) => setVillagers(e.target.value)}></input>
        </div>
        <div className="character-count">
          <label htmlFor="garou">Loup-garous</label>
          <input type="number" onChange={(e) => setGarous(e.target.value)}></input>
        </div>
        <div className="character-count">
          <label htmlFor="voyante">Voyante</label>
          <input type="number" onChange={(e) => setVoyantes(e.target.value)}></input>
        </div>
        <button type="submit">Submit</button>
      </form>

      {roster}

    </div>
  );
}

export default App;
