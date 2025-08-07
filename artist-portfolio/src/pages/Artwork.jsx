import { useParams } from 'react-router-dom';
import React from 'react';
import artworkData from '../data/artworkData';

function Artwork() {
  const { id } = useParams();
  console.log('Artwork ID from URL:', id);
  const artwork = artworkData.find(item => item.id === id);
  console.log('Found Artwork object:', artwork);

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
