import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Artwork from './pages/Artwork';
import Contact from './pages/Contact';
import Commission from './pages/Commission';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/artwork/:id" element={<Artwork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/commission" element={<Commission />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

