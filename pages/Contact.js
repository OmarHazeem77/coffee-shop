import "../styles/Contact.css";
import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    description: "",
  });

  const [submissions, setSubmissions] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Add to submissions table
    setSubmissions([...submissions, formData]);

    // Reset form
    setFormData({ name: "", email: "", message: "", description: "", });

    alert("Message sent successfully!");
  };


  return (
    <div id="contact" className="page">
      <div className="container">
        {/* Header Section */}
        <div className="menu-header">
          <h1>Contact Us</h1>
          <p>
            Every great conversation starts with a cup of coffee — let's start one
            together!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            {/* Contact Info Section  */}
            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <p className="contact-subtitle">
                Have questions about our coffee? Want to collaborate? We’re always
                excited to connect with fellow coffee enthusiasts!
              </p>

              <div className="contact-methods">
                {/* Location */}
                <div className="contact-method">
                  <div className="contact-icon">
                    <LocationOnIcon />
                  </div>
                  <div className="contact-details">
                    <h3>Visit Our Location</h3>
                    <p>Al Bayader, Hrar - Akkar</p>
                    <p className="contact-note">
                      Come experience our cozy atmosphere
                    </p>
                  </div>
                </div>

                <div className="divider"></div>

                {/* Phone */}
                <div className="contact-method">
                  <div className="contact-icon">
                    <PhoneIcon />
                  </div>
                  <div className="contact-details">
                    <h3>Call Us Directly</h3>
                    <p>Available for orders and inquiries</p>
                    <p className="contact-highlight">(+961) 71 829 730</p>
                  </div>
                </div>

                <div className="divider"></div>

                {/* Email */}
                <div className="contact-method">
                  <div className="contact-icon">
                    <EmailIcon />
                  </div>
                  <div className="contact-details">
                    <h3>Send Us an Email</h3>
                    <p>For business inquiries and partnerships</p>
                    <p className="contact-highlight">
                      coffee.whispers@liu.edu.lb
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-section">
              <h2>Send Message</h2>

              <form onSubmit={handleSubmit} className="contact-form">

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                </div>

                <button type="submit" className="submit-btn">
                  <SendIcon className="btn-icon" />
                  Send Message
                </button>

              </form>

            </div>
          </div>

          {/* Submissions Table */}
          {submissions.length > 0 && (
            <div
              className="messages-table-section"
              data-count={`${submissions.length} messages`}
            >
              <h2>Recent Messages</h2>
              <div className="table-container">
                <table className="messages-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((submission, index) => (
                      <tr key={index}>
                        <td>{submission.name}</td>
                        <td>{submission.email}</td>
                        <td>{submission.message}</td>
                        <td>{submission.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Contact;
