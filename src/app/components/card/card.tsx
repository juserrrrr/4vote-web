import React from 'react';
import './Card.css';

export const Card = () => {
  return (
    <div className="card-container">
      <img
        src="https://picsum.photos/300/104"
        alt="Card Image"
        className="card-image"
      />
      <p className="card-line">linha</p>
      <h2 className="card-title">Título do card</h2>
      <p className="card-description">Descrição</p>
      <a
        href="cardPage"
        className="card-link"
      >
        .
      </a>
      <p className="card-type">VOTAÇÃO / ENQUETE</p>
      <p className="card-tag">#hastag1 #hastag2</p>
    </div>
  );
};
