import React, { useState } from 'react';
import UserDAO from '../../daos/UserDAO';
import useAuthStore from '../../stores/use-auth-store';

const Form = () => {
  const [email, setEmail] = useState('');
  const [score, setScore] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const colors = ["dorado", "green", "black"];
  const { rewards} = useAuthStore();

  console.log('rewards',rewards);

  

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const scoreData = {
      email,
      score: parseInt(score),
    };
    try {
      await UserDAO.addScore(scoreData);
      // Puedes agregar lógica adicional aquí, como notificaciones de éxito
    } catch (error) {
      console.error('Error adding score:', error);
      // Puedes agregar lógica adicional aquí, como notificaciones de error
    }
  };

  const handleColorSubmit = (e) => {
    e.preventDefault();
    //verifico si el color seleccionado ya esta en score
    const reward = rewards.find((reward) => reward === selectedColor);
    if (reward) {
      console.log('Ya tienes este color');
      return;
    }else{
      rewards.push(selectedColor);
      console.log('reward',reward);
      const rewardData = {
        email,
        rewards,
      };
      UserDAO.updateReward(email, rewardData);
    }
  };



  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Puntuación:</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <form onSubmit={handleColorSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Selecciona un color:</label>
          <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} required>
            <option value="" disabled>Selecciona un color</option>
            {colors.map((colorOption, index) => (
              <option key={index} value={colorOption}>
                {colorOption}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;