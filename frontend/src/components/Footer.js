import React from 'react';
import './Footer.css'

const Footer = () => (
  <div className="main-footer">
    <div className="container">
      <div className="row">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} Bongwon All rights reserved
        </p>
      </div>
    </div>
  </div>
);

export default Footer;