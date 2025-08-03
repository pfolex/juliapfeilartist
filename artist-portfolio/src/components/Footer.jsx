import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" sx={{ flexGrow: 1, textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Julia Pfeil
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;

