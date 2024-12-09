import React from 'react';
import useAuthStore from '../../stores/use-auth-store';

const Reward = () => {
  const { rewards } = useAuthStore();
  return (
    <div>
      {rewards.map((badge, index) => (
        <div key={index}>
          <h1>{badge}</h1>
          <img 
            src={`/images/insignias/${badge}.webp`} 
            alt={badge} 
          />
        </div>
      ))}
    </div>
  );
};

export default Reward;