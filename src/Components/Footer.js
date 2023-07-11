// Footer.js
import React from 'react';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © 2023 Sanya.
          </p>
          <ul className="footer-links">
            <li className="footer-link-item">
              <a href="https://github.com/your-username">
                <GitHub className="icon" />
                GitHub
              </a>
            </li>
            <li className="footer-link-item">
              <a href="https://linkedin.com/in/your-username">
                <LinkedIn className="icon" />
                LinkedIn
              </a>
            </li>
            <li className="footer-link-item">
              <a href="mailto:youremail@example.com">
                <Email className="icon" />
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
