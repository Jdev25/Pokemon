import React, { useRef } from "react";
import Card from "./Card";
import data from "./data/data.json";
import "./css/card.css";

const CardDeck = () => {
  const clickSound = useRef(null);

  const handleCardClick = () => {
    if (clickSound.current) {
      clickSound.current.play();
    }
  };

  return (
    <div className="card-container">
      {data.map((pokemon, index) => (
        <div key={index} onClick={handleCardClick}>
          <Card data={pokemon} />
        </div>
      ))}

      {/* Audio oculto */}
      <audio ref={clickSound} src="/src/sounds/tmpq91k5v_6.mp3" />
    </div>
  );
};

export default CardDeck;
