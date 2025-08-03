import { useParams } from 'react-router-dom';
import artworks from '../data/artworks';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function Artwork() {
  const { id } = useParams();
  const art = artworks.find(a => a.id === id);

  if (!art) return <p>Artwork not found.</p>;

  return (
    <Card>
      <CardMedia
        component="img"
        image={art.image}
        alt={art.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {art.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {art.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Medium:</strong> {art.medium}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Dimensions:</strong> {art.dimensions}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Artwork;

