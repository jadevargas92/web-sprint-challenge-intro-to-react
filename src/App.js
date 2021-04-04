import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      console.log(response.data)
      setCharacterData(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div>
      {characterData.map((character, index) => {
        return (
          <Character 
          name={character.name} 
          height={character.height} 
          mass={character.mass} 
          hair_color={character.hair_color} 
          skin_color={character.skin_color}
          uniqueKey={index}
          />
        );
      })}
    </div>
  );
}

export default App;
