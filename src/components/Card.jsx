import React, { useState } from "react";
import Invocar from "./Invocar";

const Card = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  const [showModelo, setShowModelo] = useState(false);

  const handleClick = () => setFlipped(!flipped);
  const handleInvocar = () => setShowModelo(true);
  const handleClose = () => setShowModelo(false);

  return (
    <>
      <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
        <div className="card-inner">
          <div className="card-back"></div>
          <div className="card-front">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${data.pokemon.img})` }}
            ></div>
            <div className="card-info">
              <h2>{data.pokemon.nombre}</h2>
              <p>Tipo Carta: {data.pokemon.tipo_carta}</p>
              <p>HP: {data.pokemon.hp}</p>
              <p>Tipo de Energía: {data.pokemon.tipo_energia_principal}</p>
              <p>Ataque: {data.ataque_principal.nombre} ({data.ataque_principal.danio})</p>
            </div>
            <button className="btn-invocar" onClick={handleInvocar}>Invocar</button>
          </div>
        </div>
      </div>

      {showModelo && <Invocar modelo={data.pokemon.modelo} onClose={handleClose} />}
    </>
  );
};

export default Card;
