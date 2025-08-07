import { Link } from 'react-router-dom';
import { artworks } from '../data/artworks.js';
import frame from '../assets/images/frame.png';
import { Grid } from '@mui/material';
import './Gallery.css';

function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      <Grid container spacing={2}>
        {artworks.map(art => (
          <Grid item xs={12} sm={6} md={4} key={art.id}>
            <Link to={`/artwork/${art.id}`}>
              <div className="frame-container">
                <img src={frame} alt="Art Frame" className="frame" />
                <img src={art.image} alt={art.title} className="artwork" />
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Gallery;

