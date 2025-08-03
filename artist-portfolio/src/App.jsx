import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Artwork from './pages/Artwork';
import Commission from './pages/Commission';
import { createTheme, ThemeProvider, Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#ffc107',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/artwork/:id" element={<Artwork />} />
          <Route path="/commission" element={<Commission />} />
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

