import { useParams } from 'react-router-dom';
import React from 'react';
import artworkData from '../data/artworkData';

function Artwork() {
  const { id } = useParams();
  const artwork = artworkData.find(item => item.id === id);

  if (!artwork) {
    return <div>Artwork not found.</div>;
  }

  return (
    <div>
      <img src={artwork.src} alt={artwork.alt} style={{ maxWidth: '100%' }} />
      <p>{artwork.description}</p>
    </div>
  );
}

export default Artwork;
