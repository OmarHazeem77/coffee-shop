import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home" className="page active">
      <div className="container">
        <div className="hero">
          <h1>Welcome to Coffee Whispers</h1>
          <p>Step into the aroma — where every cup is brewed to whisper comfort and joy.</p>
          <Link to="/about" className="cta-btn">Explore Our Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;