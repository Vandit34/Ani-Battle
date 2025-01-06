import React from 'react'

const Card = ({ name, series, attack, defense, specialPower }) => {
  return (
    <>
      <div className='gaming-card absolute'>
        {/* Character Image */}

        {/* Character Name & Series */}
        <div className='gaming-card-info'>
          <h3 className='gaming-card-name'>{name}</h3>
          <p className='gaming-card-series'>{series}</p>
        </div>

        {/* Character Stats */}
        <div className='gaming-card-stats'>
          <div className='stat'>
            <span className='stat-title'>Attack:</span>
            <span className='stat-value'>{attack}</span>
          </div>
          <div className='stat'>
            <span className='stat-title'>Defense:</span>
            <span className='stat-value'>{defense}</span>
          </div>

          <div className='stat'>
            <span className='stat-title'>Special Power:</span>
            <span className='stat-value'>{specialPower}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
