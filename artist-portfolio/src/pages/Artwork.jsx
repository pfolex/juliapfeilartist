import { useParams } from 'react-router-dom';

function Artwork() {
  const { id } = useParams();
  const imagePath = `/images/artwork/${id}.jpg`; // Assuming jpg, adjust if needed

  return (
    <div>
      <img src={imagePath} alt={`Artwork ${id}`} style={{ maxWidth: '100%' }} />
    </div>
  );
}

export default Artwork;