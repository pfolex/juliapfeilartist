import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Artist Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
        <Button color="inherit" component={Link} to="/commission">Commission</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

