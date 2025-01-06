import React from 'react'
import { characters } from './data/character.js'
import { useState } from 'react'
// import {battleScore} from "./utils/battle.js"
import Card from './Card.jsx'

const BattleArena = () => {
  const [handleCharacter, sethandleCharacter] = useState(null)

  const handeleMouseEnter = character => {
    // console.log("Mouse entered on character: ", character);
    sethandleCharacter(character)
  }

  const handleMouseLeave = () => {
    // console.log("Mouse left the character");
    sethandleCharacter(null)
  }

  const [PlayerA, setPlayerA] = useState(null)
  const [PlayerB, setPlayerB] = useState(null)

  const selectingPlayers = character => {
    if (PlayerA === null) {
      console.log('PlayerA:', character)
      setPlayerA(character)
    } else if (PlayerB === null) {
      console.log('PlayerB:', character)
      setPlayerB(character)
    } else {
      console.log('Both players are selected')
    }
  }

  return (
    <div className='battle-arena-container 0 min-h-screen flex flex-col justify-between p-10'>
      {/* Battle Cards Section */}
      <div className='flex justify-between items-center mb-20'>
        {/* Player 1 Card */}
        <div className='player-card bg-white shadow-xl rounded-lg w-1/4 p-5 flex flex-col items-center transform hover:scale-105 transition-transform'>
          <div className='character-image bg-gray-200  rounded-lg mb-4'>
            <img
              className='w-[25rem] h-[25rem]'
              src={
                PlayerA === null
                  ? '../src/assets/CharThinking.jpg'
                  : PlayerA.image
              }
            />
          </div>
          <h2 className='text-xl font-bold text-gray-800'>Player 1</h2>
        </div>

        {/* Versus Section */}
        <div className='text-5xl font-extrabold text-white'>VS</div>

        {/* Player 2 Card */}
        <div className='player-card bg-white shadow-xl rounded-lg w-1/4 p-5 flex flex-col items-center transform hover:scale-105 transition-transform'>
          <div className='character-image bg-gray-200  rounded-lg mb-4'>
            <img
              className='w-[25rem] h-[25rem]'
              src={
                PlayerB === null
                  ? '../src/assets/CharThinking.jpg'
                  : PlayerB.image
              }
            />
          </div>
          <h2 className='text-xl font-bold text-gray-800'>Player 2</h2>
        </div>
      </div>

      <>
        <>
          {handleCharacter && (
            <div className='absolute z-20 left-[40%] top-[45%]'>
              <Card
                name={handleCharacter.name}
                series={handleCharacter.series}
                attack={handleCharacter.attack}
                defense={handleCharacter.defense}
                specialPower={handleCharacter.specialPower}
              />
            </div>
          )}
        </>
      </>

      {/* Character Selection Section */}

      <div className=' character-selection bg-pink-600 bg-opacity-80 rounded-lg p-5 shadow-md flex overflow-x-auto gap-4'>
        {characters.map((character, index) => (
          <>
            <div
              key={index}
              className='character-box relative bg-gray-200 w-32 h-32 rounded-lg shadow-md hover:shadow-lg cursor-pointer transform hover:scale-110 transition-transform flex-shrink-0'
              onMouseEnter={() => handeleMouseEnter(character)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                selectingPlayers(character)
              }}
            >
              {/* /* Character Image */}
              <div className='character-img w-full h-full rounded-lg bg-gray-400'>
                <img
                  src={characters[index].image}
                  alt={`Character ${[index + 1]}`}
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default BattleArena
