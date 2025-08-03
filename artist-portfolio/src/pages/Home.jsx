import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import featured from '/images/IMG_4044.jpg'

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <img src={featured} alt="Artist's work" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }} />
      <Typography variant="h2" component="h1" gutterBottom sx={{ mt: 4 }}>
        Welcome to My Art Portfolio
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Explore my artwork and discover the stories behind the canvas.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/gallery" sx={{ mt: 4 }}>
        View Gallery
      </Button>
    </Box>
  );
}

export default Home;