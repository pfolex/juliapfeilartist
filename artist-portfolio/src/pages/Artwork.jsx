import { useParams } from 'react-router-dom';
import artworks from '../data/artworks';

function Artwork() {
  const { id } = useParams();
  const art = artworks.find(a => a.id === id);

  if (!art) return <p>Artwork not found.</p>;

  return (
    <div>
      <h2>{art.title}</h2>
      <img src={art.image} alt={art.title} />
      <p>{art.description}</p>
      <p><strong>Medium:</strong> {art.medium}</p>
      <p><strong>Dimensions:</strong> {art.dimensions}</p>
    </div>
  );
}

export default Artwork;

