import { Link } from 'react-router-dom';
import { artworks } from '../data/artworks.js';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      <Grid container spacing={2}>
        {artworks.map(art => (
          <Grid item xs={12} sm={6} md={4} key={art.id}>
            <Card>
              <Link to={`/artwork/${art.id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={art.image}
                  alt={art.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {art.title}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Gallery;

