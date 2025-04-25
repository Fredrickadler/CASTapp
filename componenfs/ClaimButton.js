import React, { useState, useEffect } from 'react';

const ClaimButton = ({ onClaim }) => {
  const [lastClaimTime, setLastClaimTime] = useState(null);
  const [nextClaimTime, setNextClaimTime] = useState(null);
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    const savedTime = localStorage.getItem('lastClaimTime');
    if (savedTime) {
      setLastClaimTime(parseInt(savedTime));
      calculateNextClaimTime(parseInt(savedTime));
    }
  }, []);

  const calculateNextClaimTime = (claimTime) => {
    const nextTime = new Date(claimTime + 6 * 60 * 60 * 1000);
    setNextClaimTime(nextTime);
    
    const now = new Date();
    setIsReady(now >= nextTime);
  };

  const handleClaim = () => {
    if (!isReady) return;
    
    const now = new Date();
    localStorage.setItem('lastClaimTime', now.getTime().toString());
    setLastClaimTime(now.getTime());
    calculateNextClaimTime(now.getTime());
    onClaim(11);
  };

  const formatTime = (time) => {
    if (!time) return '';
    return new Date(time).toLocaleTimeString();
  };

  return (
    <div className="claim-button-container">
      <button 
        onClick={handleClaim} 
        className={`claim-button ${isReady ? 'active' : 'disabled'}`}
        disabled={!isReady}
      >
        {isReady ? 'Claim 11 Points' : 'Come Back Later'}
      </button>
      {!isReady && nextClaimTime && (
        <p className="next-claim-time">Next claim available at: {formatTime(nextClaimTime)}</p>
      )}
    </div>
  );
};

export default ClaimButton;
