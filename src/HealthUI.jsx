import React, { useEffect, useState } from 'react';

const HealthBar = ({ data }) => {
  // State to store the health for smooth transition
  const [currentHealth, setCurrentHealth] = useState(data[0]);

  // Update health after each round smoothly
  useEffect(() => {
    if (data.length > 0) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < data.length) {
          setCurrentHealth(data[currentIndex]);
          currentIndex += 1;
        } else {
          clearInterval(interval); // Stop when all rounds are processed
        }
      }, 2000); // 2 seconds interval for each round change

      return () => clearInterval(interval);
    }
  }, [data]);

  // Calculate percentage based on current health
  const percentage = Math.min((currentHealth / 100) * 100, 100); // Ensure it never exceeds 100%

  // Define color based on health percentage
  const getColor = () => {
    if (percentage >= 60) return 'linear-gradient(to right, #4caf50, #8bc34a)'; // Green
    if (percentage >= 30) return 'linear-gradient(to right, #ffeb3b, #fbc02d)'; // Yellow
    return 'linear-gradient(to right, #f44336, #d32f2f)'; // Red
  };

  return (
    <div className="health-bar-container" style={{ width: '100%', marginTop: '20px' }}>
      <div
        className="health-bar"
        style={{
          width: '100%',
          backgroundColor: '#e0e0e0', // Light gray for background
          borderRadius: '20px',
          height: '30px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          className="health-progress"
          style={{
            width: `${percentage}%`,
            background: getColor(),
            height: '100%',
            borderRadius: '20px',
            transition: 'width 2s ease-in-out', // Smooth transition for health changes
          }}
        />
      </div>
      <div className="health-text" style={{ textAlign: 'center', marginTop: '10px' }}>
        <span style={{ color: '#333', fontWeight: 'bold' }}>{Math.round(percentage)}% Health</span>
      </div>
    </div>
  );
};

export default HealthBar;
