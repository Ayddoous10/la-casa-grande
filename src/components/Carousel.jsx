import React, { useState } from "react";
import "./Carousel.css";

function Carousel({ images, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="carousel-container">
      <h2>{title}</h2>
      <div className="carousel-grid">
        {images.map((img, index) => (
          <div key={index} className="carousel-item" onClick={() => openModal(index)}>
            <img src={img.src} alt={img.alt} />
            <p>{img.caption}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✖</button>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <p>{images[currentIndex].caption}</p>
            <div className="modal-nav">
              <button onClick={prevImage}>⟨</button>
              <button onClick={nextImage}>⟩</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
