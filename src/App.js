import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';



export default function App() {
  const [title, setTitle] = useState('Player HUD');

  useEffect(() => {
    document.title = title
  })

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters()
      setCharacters(data)
    }

    getCharacters()
  }, [])

  // Fetch characters from server
  const fetchCharacters = async () => {
    const res = await fetch("http://localhost:5500/characters")
    const data = await res.json()

    return data
  }

  // Update character information in database
  const updateCharacter = async (charObj) => {
    const charId = charObj.id
    await fetch(`http://localhost:5500/characters/${charId}`, {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(charObj)
    })
    
    const newCharInfo = []

    characters.forEach(character => {
      if (character.id === charId) {
        character = charObj
      }
      newCharInfo.push(character)
    });

    setCharacters(newCharInfo)
  }

  const listComp = () => {
    return characters.map((item) => <Character 
      key={item.id} 
      charInfo={item} 
      updateCharInfo={updateCharacter} 
    />);
  }

  console.log(characters)

  return (
    <div className="App">
      <label htmlFor='titleChange'>Change Page Title:</label>
      <input 
        type='text'
        id='titleChange'
        onChange={(e) => setTitle(e.target.value)}
      />
      <header className="App-header">
        {listComp()}
      </header>
    </div>
  );
}