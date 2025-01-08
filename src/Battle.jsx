import React, { useState } from 'react'
import { characters } from './data/character.js'
import battleScore from './utils/battle.js'
import Card from './Card.jsx'
import HealthBar from './HealthUI.jsx'

const BattleArena = () => {
  const [handleCharacter, sethandleCharacter] = useState(null)
  const [battleLogs, setBattleLogs] = useState([])
  const [healthA, setHealthA] = useState([])
  const [healthB, setHealthB] = useState([])
  const [PlayerA, setPlayerA] = useState(null)
  const [PlayerB, setPlayerB] = useState(null)
  const [winner, setWinner] = useState(null) // State to hold the winner's name

  const handeleMouseEnter = character => {
    sethandleCharacter(character)
  }

  const handleMouseLeave = () => {
    sethandleCharacter(null)
  }

  const selectingPlayers = character => {
    if (PlayerA === null) {
      setPlayerA(character)
    } else if (PlayerB === null) {
      setPlayerB(character)
    } else {
      console.log('Both players are selected')
    }
  }

  // Function to handle battle score and set the winner
  const handleScore = async () => {
    if (PlayerA && PlayerB) {
      console.log('Starting Battle...')
      try {
        const updateLogsCallback = roundData => {
          setBattleLogs(prevLogs => [...prevLogs, roundData])
        }

        const dataA = health => {
          setHealthA(x => [...x, health])
        }

        const dataB = health => {
          setHealthB(x => [...x, health])
        }

        // Start the battle and get the result
        const result = await battleScore(
          PlayerA,
          PlayerB,
          updateLogsCallback,
          dataA,
          dataB
        )

        // Set the winner to the state
        const finalWinner = result.winner
        setWinner(finalWinner) // Update the winner state
        console.log('Battle Winner:', finalWinner)
      } catch (error) {
        console.error('Error occurred during the battle!', error)
      }
    } else {
      console.log('Both Players need to be selected!')
    }
  }

  return (
    <div className='battle-arena-container min-h-screen flex flex-col justify-between p-10'>
      {/* Battle Cards Section */}
      <div className='flex justify-between items-center mb-20'>
        {/* Player 1 Card */}
        <div className='player-card bg-white shadow-xl rounded-lg w-1/4 p-5 flex flex-col items-center transform hover:scale-105 transition-transform'>
          <div className='character-image bg-gray-200 rounded-lg mb-4'>
            <img
              className='w-[20rem] h-[20rem]'
              src={
                PlayerA === null
                  ? '../src/assets/CharThinking.jpg'
                  : PlayerA.image
              }
            />
          </div>
          <h2 className='text-xl font-bold text-gray-800'>Player 1</h2>
          <HealthBar data={healthA} />
        </div>

        {/* Versus Section */}
        <section className='flex flex-col items-center'>
          <div className='text-5xl font-extrabold text-white mb-6'>VS</div>
          <button
            className='px-8 py-4 bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 
               text-white font-extrabold text-2xl rounded-full shadow-lg 
               hover:scale-110 hover:from-yellow-500 hover:to-red-500 
               hover:shadow-xl active:scale-95 transition-all duration-300 
               animate-pulse'
            onClick={handleScore}
          >
            ⚔️ Battle !!!
          </button>

          {/* XXXXXXXXXXXXXXXXXXXXXXXXXX */}
          {/* Battle Logs and Winner Display */}
          <div className='battle-logs bg-gradient-to-r from-indigo-100 via-green-100 to-blue-100 mt-10 p-6 rounded-lg shadow-xl'>
            {/* Round-wise Stats */}
            <div className='round-stats mb-8'>
              <h4 className='text-lg font-semibold text-gray-700 mb-4'>
                Round-wise Stats:
              </h4>
              <ul>
                {battleLogs.map((log, index) => (
                  <li
                    key={index}
                    className='flex justify-between p-3 mb-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all'
                  >
                    <span className='font-bold text-lg text-indigo-600'>{`Round ${
                      index + 1
                    }`}</span>
                    <span>
                      {log.roundWinner && (
                        <span className='text-green-600 font-semibold'>
                          {log.roundWinner} won this round!{' '}
                        </span>
                      )}
                      {log.healthA && (
                        <span className='text-blue-600 font-semibold'>
                          Player A Health: {log.healthA}
                        </span>
                      )}
                      {log.healthB && (
                        <span className='text-red-600 font-semibold'>
                          {' '}
                          | Player B Health: {log.healthB}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Final Winner */}
            <div className='final-winner'>
              {winner ? (
                <h3 className='text-2xl font-bold text-green-700'>
                  {`${winner} is the final winner!`}
                </h3>
              ) : (
                <h3 className='text-xl font-bold text-gray-600'>
                  Battle in progress. Stay tuned!
                </h3>
              )}
            </div>
          </div>

          {/* XXXXXXXXXXXXXXXXXXXXXXXXXX */}
        </section>

        {/* Player 2 Card */}
        <div className='player-card bg-white shadow-xl rounded-lg w-1/4 p-5 flex flex-col items-center transform hover:scale-105 transition-transform'>
          <div className='character-image bg-gray-200 rounded-lg mb-4'>
            <img
              className='w-[20rem] h-[20rem]'
              src={
                PlayerB === null
                  ? '../src/assets/CharThinking.jpg'
                  : PlayerB.image
              }
            />
          </div>
          <h2 className='text-xl font-bold text-gray-800'>Player 2</h2>
          <HealthBar data={healthB} />
        </div>
      </div>

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

      {/* Character Selection Section */}
      <div className='character-selection bg-pink-600 bg-opacity-80 rounded-lg p-5 shadow-md flex overflow-x-auto gap-4'>
        {characters.map((character, index) => (
          <div
            key={index}
            className='character-box relative bg-gray-200 w-32 h-32 rounded-lg shadow-md hover:shadow-lg cursor-pointer transform hover:scale-110 transition-transform flex-shrink-0'
            onMouseEnter={() => handeleMouseEnter(character)}
            onMouseLeave={handleMouseLeave}
            onClick={() => selectingPlayers(character)}
          >
            <div className='character-img w-full h-full rounded-lg bg-gray-400'>
              <img
                src={characters[index].image}
                alt={`Character ${index + 1}`}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BattleArena
