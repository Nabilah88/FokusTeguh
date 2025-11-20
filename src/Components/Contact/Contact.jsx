import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

          <div className="contact-info">
            <div className="info-item">
              <div className="icon">&#x1F4CD;</div>
              <div>
                <strong>Address</strong>
                <p>4671 Sugar Camp Road,<br />Owatonna, Minnesota,<br />55060</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">&#x260E;</div>
              <div>
                <strong>Phone</strong>
                <p>507-475-60945-6094</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">&#x2709;</div>
              <div>
                <strong>Email</strong>
                <p>wrub7d78i0e@temporary-mail.net</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <h3>Send Message</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Type your Message..." required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
