import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p>&copy; 2020 Thomas.dev</p>
          </div>
          <div className="col">
            <ul className="footer-links">
              <li>
                <a href="http://www.linkedin.com">
                  <span className="bi-linkedin"></span>Linked In
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bi-github"></span>Git Hub
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bi-facebook"></span>Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
