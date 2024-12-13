import React from 'react';
import "./Reward.css";
import useAuthStore from '../../stores/use-auth-store';

const Reward = () => {
  const { rewards } = useAuthStore();

  console.log(rewards);

  return (
    <div className="background">
      <h1 className="title-header">PUNTUACIONES</h1>
      <div className="reward-box">
        <div className="reward-row">
          {rewards && rewards.length > 0 ? (
            rewards.map((badge, index) => (
              <div key={index} className="reward-item">
                <h1>{badge}</h1>
                <img src={`/images/insignias/${badge}.webp`} alt={badge} />
              </div>
            ))
          ) : (
            <h2>Actualmente no tienes insignias</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reward;