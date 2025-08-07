import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const imageModules = import.meta.glob('/public/images/artwork/*.{png,jpg,jpeg,svg}');
      const imagePaths = Object.keys(imageModules);
      const loadedArtworks = imagePaths.map(path => ({
        src: path.replace('/public', ''),
        id: path.split('/').pop().split('.')[0], // Or generate a unique ID differently
        alt: `Artwork ${imagePaths.indexOf(path) + 1}`
      }));
      setArtworks(loadedArtworks);
    };

    fetchArtworks();
  }, []);

  return (
    <div className="gallery-container">
      {artworks.map((artwork, index) => (
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

