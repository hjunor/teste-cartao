import React from 'react';
import Particles from 'react-tsparticles';
import './App.css';
import HappyBirthday from './Assets/unnamed.png';
import particlesOptions from './particles.json';

function App() {
  return (
    <div className="App">
      <Particles options={particlesOptions} />
      <div className="card">
        <img className="rotate" src={HappyBirthday} alt="HappyBirthday" />
        <div>
          <h2>Ana Maria</h2>
          <p>
            Parabéns! Que o tempo seja sempre o seu melhor parceiro, trazendo
            equilíbrio e sabedoria que lhe darão a receita ideal para viver a
            vida, aproveitando o melhor que ela tem a oferecer. Muita saúde,
            amor, paz, fé, esperança, alegria e prosperidade. Feliz aniversário!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
