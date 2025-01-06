import React from 'react'
import { characters } from './data/character.js'
// import {battleScore} from "./utils/battle.js"

const BattleArena = () => {

    // console.log(battleScore(A,B).healthA);
    // console.log(battleScore(C,D).healthB);

    
  return (
    <div className='battle-arena-container 0 min-h-screen flex flex-col justify-between p-10'>
      {/* Battle Cards Section */}
      <div className='flex justify-between items-center mb-20'>
        {/* Player 1 Card */}
        <div className='player-card bg-white shadow-xl rounded-lg w-1/4 p-5 flex flex-col items-center transform hover:scale-105 transition-transform'>
          <div className='character-image bg-gray-200 w-full h-48 rounded-lg mb-4'></div>
          <h2 className='text-xl font-bold text-gray-800'>Player 1</h2>
        </div>

        {/* Versus Section */}
        <div className='text-5xl font-extrabold text-white'>VS</div>

        {/* Player 2 Card */}
        <div className='player-card bg-white shadow-xl rounded-lg w-1/4 p-5 flex flex-col items-center transform hover:scale-105 transition-transform'>
          <div className='character-image bg-gray-200 w-full h-48 rounded-lg mb-4'></div>
          <h2 className='text-xl font-bold text-gray-800'>Player 2</h2>
        </div>
      </div>
      {/* Character Selection Section */}
      <div className='character-selection bg-pink-600 bg-opacity-80 rounded-lg p-5 shadow-md flex overflow-x-auto gap-4'>
        {characters.map((_, index) => (
          <div
            key={index}
            className='character-box relative bg-gray-200 w-32 h-32 rounded-lg shadow-md hover:shadow-lg cursor-pointer transform hover:scale-110 transition-transform flex-shrink-0'
          >
            {/* /* Character Image */}
            <div className='character-img w-full h-full rounded-lg bg-gray-400'>
              <img
                src={characters[index].image}
                alt={`Character ${[index + 1]}`}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            {/* Name on Hover */}
            <div className='character-name absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center text-sm py-1 opacity-0 hover:opacity-100 transition-opacity'>
              {characters[index].name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BattleArena
