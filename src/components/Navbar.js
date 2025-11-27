import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo"> Coffee Whispers</Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
