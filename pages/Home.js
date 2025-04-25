import React, { useState, useEffect } from 'react';
import ClaimButton from '../components/ClaimButton';

const Home = () => {
  const [points, setPoints] = useState(0);

  // Load points from localStorage on component mount
  useEffect(() => {
    const savedPoints = localStorage.getItem('airdropPoints');
    if (savedPoints) {
      setPoints(parseInt(savedPoints));
    }
  }, []);

  const handleClaim = (newPoints) => {
    const totalPoints = points + newPoints;
    setPoints(totalPoints);
    localStorage.setItem('airdropPoints', totalPoints.toString());
  };

  return (
    <div className="page">
      <h1>Airdrop Points</h1>
      <div className="claim-section">
        <ClaimButton onClaim={handleClaim} />
        <div className="points-display">
          <h2>Your Points:</h2>
          <p className="points-value">{points}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
