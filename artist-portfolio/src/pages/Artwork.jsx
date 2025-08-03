import { useParams } from 'react-router-dom';
import { artworks } from '../data/artworks.js';

function Artwork() {
  const { id } = useParams();
  const art = artworks.find(a => a.id === id);

  if (!art) {
    return <div>Artwork not found</div>;
  }

  return (
    <div>
      <h2>{art.title}</h2>
      <img src={art.image} alt={art.title} style={{ maxWidth: '100%' }} />
      <p>Dimensions: {art.dimensions}</p>
      <p>{art.description}</p>
    </div>
  );
}

export default Artwork;