import { Link } from 'react-router-dom';
import artworks from '../data/artworks';

function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {artworks.map(art => (
          <Link key={art.id} to={`/artwork/${art.id}`}>
            <img src={art.thumbnail} alt={art.title} />
            <p>{art.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

