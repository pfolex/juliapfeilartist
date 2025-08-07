import { Link } from 'react-router-dom';
import React from 'react';
import './Gallery.css';
import artworkData from '../data/artworkData';

const Gallery = () => {
  return (
    <div className="gallery-container">
      {artworkData.map((artwork, index) => (
        <div key={index} className="artwork-item">
          <Link to={`/artwork/${artwork.id}`}>
            <img src={artwork.src} alt={artwork.alt} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

