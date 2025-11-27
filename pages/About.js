import "../styles/About.css";
import CoffeeIcon from '@mui/icons-material/Coffee';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const About = () => {
  return (
    <div id="about" className="page">
      <div className="container">
        <div className="about-header">
          <h1>About Coffee Whispers</h1>
          <p>Where passion for coffee meets academic excellence</p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <h2>Our Journey</h2>
              <p>
                Welcome to Coffee Whispers, a conceptual coffee shop project created
                by Omar & Omar as part of our CSCI 426 course requirements. This platform
                represents our dedication to both quality coffee and innovative web development.
              </p>

              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">
                    <CoffeeIcon />
                  </div>
                  <h3>Quality Focus</h3>
                  <p>Premium coffee blends crafted with precision and care</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <SchoolIcon />
                  </div>
                  <h3>Academic Project</h3>
                  <p>Developed as part of CSCI 426 web development course</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <GroupIcon />
                  </div>
                  <h3>Team Work</h3>
                  <p>Collaborative effort showcasing our technical skills</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">
                    <EmojiEventsIcon />
                  </div>
                  <h3>Excellence</h3>
                  <p>Striving for perfection in both code and coffee</p>
                </div>
              </div>
            </div>

            <div className="about-sidebar">
              <div className="project-info">
                <h3>Project Details</h3>
                <div className="info-item">
                  <b>Course:</b>
                  <p>CSCI 426</p>
                </div>
                <div className="info-item">
                  <b>Project:</b>
                  <p>Coffee Shop Website</p>
                </div>
                <div className="info-item">
                  <b>Team:</b>
                  <p>Omar & Omar</p>
                </div>
                <div className="info-item">
                  <b>Focus:</b>
                  <p>Web Development</p>
                </div>
              </div>

              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>
                  To demonstrate how technology can enhance the coffee experience
                  while showcasing our growing expertise in modern web development.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;