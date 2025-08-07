import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Artwork() {
  const { id } = useParams();
  const extensions = ['.jpg', '.png', '.jpeg', '.svg'];
  const [currentSrc, setCurrentSrc] = useState('');
  const [extIndex, setExtIndex] = useState(0);

  useEffect(() => {
    if (extIndex < extensions.length) {
      const path = `/images/artwork/${id}${extensions[extIndex]}`;
      setCurrentSrc(path);
    } else {
      // All extensions tried, image not found or could not be loaded
      setCurrentSrc(''); // Set to empty or a placeholder for "image not found"
    }
  }, [id, extIndex, extensions]);

  const handleError = () => {
    setExtIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div>
      {currentSrc ? (
        <img
          src={currentSrc}
          alt={`Artwork ${id}`}
          style={{ maxWidth: '100%' }}
          onError={handleError}
        />
      ) : (
        <p>Image not found or could not be loaded.</p>
      )}
    </div>
  );
}

export default Artwork;