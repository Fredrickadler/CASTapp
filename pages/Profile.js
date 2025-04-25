import React from 'react';

const Profile = () => {
  const userPoints = localStorage.getItem('airdropPoints') || 0;
  const rank = userPoints >= 100 ? 'Gold' : userPoints >= 50 ? 'Silver' : 'Bronze';

  return (
    <div className="page">
      <h1>Your Profile</h1>
      <div className="profile-card">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-image"
        />
        <div className="profile-info">
          <h2>User</h2>
          <p>Points: {userPoints}</p>
          <p>Rank: <span className={`rank-${rank.toLowerCase()}`}>{rank}</span></p>
        </div>
      </div>
      <div className="share-section">
        <button className="share-button">Share Your Rank</button>
      </div>
    </div>
  );
};

export default Profile;
