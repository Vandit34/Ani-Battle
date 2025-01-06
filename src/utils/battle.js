const battleScore = (charA, charB) => {
  // Given : Attack , Defense , Sp. Power
  //There will be 3 rounds for getting result
  //Health
  //Damage
  //both Player's Health will be calculated after each round
  // Keep Logs after completion of all rounds : to delcare the Winner

  let logs = []

  let healthA = 100
  let healthB = 100
  for (let i = 0; i < 3; ++i) {
    // i=0 represents Round 1 (i+1)
    const damageA = charA.attack - charB.defense  
    const damageB = charB.attack - charA.defense 

    healthA = healthA - damageB
    healthB = healthB - damageA
    logs.push(
      healthA > healthB
        ? `Round ${i + 1} :Winner is ${charA.name}`
        : `Round ${i + 1} :Winner is ${charB.name}`
    )
  }
  const winner = healthA > healthB ? charA.name : charB.name

  return { winner,healthA,healthB } // Note it : because we will utilize it  using  "." operator to get the result
}

export default battleScore