import React from 'react';
import "./Reward.css";

const data = ["green", "dorado", "red", "black", "white", "yellow", "purple", "pink", "orange", "brown"];

const Reward = () => {
  const row1 = data.slice(0, 5);
  const row2 = data.slice(5, 10);

  return (
    <div className="background">
      <h1 className="title-header">PUNTUACIONES</h1>
      <div className="reward-box">
        <div className="reward-row">
          {row1.map((badge, index) => (
            <div key={index} className="reward-item">
              <h1>{badge}</h1>
              <img src={`/images/insignias/${badge}.webp`} alt={badge} />
            </div>
          ))}
        </div>
        <div className="reward-row">
          {row2.map((badge, index) => (
            <div key={index} className="reward-item">
              <h1>{badge}</h1>
              <img src={`/images/insignias/${badge}.webp`} alt={badge} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reward;
