import React, { useState, useEffect } from "react";

function Example() {
  // Declare a new state variable, which we'll call "enemyHp"
  const [enemyHp, setEnemy] = useState(100);
  const [heroHp, setHero] = useState(100);
  const [eventText, setEventText] = useState("");
  const [enemyText, setEnemyText] = useState("");

  // Esto es como el constructor, useState() <--- Valor inicial del estado // Esto es como el constructor, useState() <--- Valor inicial del estado
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   setHero(heroHp - 1);
  //   setEnemyText("Enemy Attacked You!");
  // });

  const attack = () => {
    setEnemy(enemyHp - 1);
    setEventText(`You have attacked the enemy!`);
  };
  return (
    <div>
      <p>Enemy HP {enemyHp} points</p>
      <p>Your HP {heroHp} points</p>
      <br />
      <button onClick={attack}>Attack</button>
      <button>Defend</button>
      <button onClick={() => setHero(heroHp + 1)}>Heal</button>
      <button onClick={() => setEventText("You ran away...")}>Run</button>
      <br />
      <p>{eventText}</p>
      <p>{enemyText}</p>
    </div>
  );
}

export default Example;
