const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const battleScore = async (charA, charB, updateLogsCallback, dataA,dataB) => {
  // Given : Attack , Defense , Sp. Power
  //There will be 3 rounds for getting result
  //Health
  //Damage
  //both Player's Health will be calculated after each round
  // Keep Logs after completion of all rounds : to delcare the Winner

  // Create a seperate function for getting executed after each round

  // "for loop" will call the  above function which is covered inside the

  let logs = []

  let healthA = 100
  let healthB = 100

  // ------- Calculation of health after 2secs -----------
  function resultPerRound (round) {
    const damageA = Math.max(charA.attack - charB.defense, 0)
    const damageB = Math.max(charB.attack - charA.defense, 0)

    healthA = Math.max(healthA - damageB, 0)
    healthB = Math.max(healthB - damageA, 0)
    console.log('Health A : ', healthA)
    console.log('Health B: ', healthB)
    dataA(healthA)
    dataB(healthB)

    let roundData = {
      round: round + 1,
      healthA: healthA,
      healthB: healthB,
      winner: healthA > healthB ? charA.name : charB.name
    }

    logs.push(roundData)

    // return roundData
    updateLogsCallback(roundData) // Update the logs after each round
  }

  // ------- Calling Round after 2secs -----------
  // i=0 represents Round 1 (i+1)
  for (let i = 0; i < 3; ++i) {
    await delay(2000 * (i + 1))
    resultPerRound(i)
  }
  // if (i === 2) {
  const winner = healthA > healthB ? charA.name : charB.name
  console.log(winner)
  return { winner, logs } 
  // return { winner }
  // }
}


export default battleScore
