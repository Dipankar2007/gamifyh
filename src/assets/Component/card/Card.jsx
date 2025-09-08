import React, { useState } from "react";
import "./card.css";

function Cards({ cards }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className="cards-section">
      <h2>Our Popular Cards</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-card ${card.featured ? "featured" : ""}`}
            onClick={() => openModal(card)}
          >
            <img src={card.imgSrc} alt={card.title} className="avatar" />
            <h3>{card.title}</h3>
            <p>{card.level}</p>
            <p>{card.duration}</p>
            <p>⭐ {card.rating}</p>
            <button
              className="btn-primary"
              onClick={(e) => {
                e.stopPropagation(); // prevent opening modal when clicking button
                alert(`${card.enrolled} enrolled!`);
              }}
            >
              {card.enrolled}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing on content click
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedCard.imgSrc}
              alt={selectedCard.title}
              className="avatar"
            />
            <h2>{selectedCard.title}</h2>
            <p>Level: {selectedCard.level}</p>
            <p>Duration: {selectedCard.duration}</p>
            <p>⭐ Rating: {selectedCard.rating}</p>
            <p>{selectedCard.enrolled} students enrolled</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cards;
