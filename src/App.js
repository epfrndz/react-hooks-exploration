import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';

const charArray = [
  {
    name: 'Mark',
    race: 'Human',
    status: 'Full-Health',
    location: 'Vancouver',
    health: 150,
    stamina: 200,
    gold: 75,
    comment: ''
  },
  {
    name: 'Goerge',
    race: 'Demon',
    status: 'Enraged',
    location: 'Vancouver',
    health: 150,
    stamina: 200,
    gold: 75,
    comment: 'I\'m so ANGRY!!!!'
  },
  {
    name: 'Angela',
    race: 'Fairy',
    status: 'Full-Health',
    location: 'Vancouver',
    health: 150,
    stamina: 200,
    gold: 75,
    comment: ''
  }
];

const listComp = () => {
  return charArray.map((item, i) => <Character 
    key={i} 
    name={item.name} 
    race={item.race} 
    status={item.status} 
    location={item.location}
    health={item.health}
    stamina={item.stamina}
    gold={item.gold}
    comment={item.comment}
  />);
}

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