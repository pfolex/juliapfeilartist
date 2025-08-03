import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Artist Portfolio</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/commission">Commission</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

