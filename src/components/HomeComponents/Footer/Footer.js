import './Footer.css';
import { useState } from 'react';
import Logo from './logo.svg';

const Footer = () => {
  const [date] = useState(new Date().getFullYear());
  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-logo'>
          <div>
            <img src={Logo} alt='' />
            <p>E wallet</p>
          </div>
          <div className='social'>
            <span>
              <i className='fab fa-twitter'></i>
            </span>
            <span>
              <i className='fab fa-instagram'></i>
            </span>
            <span>
              <i className='fab fa-facebook'></i>
            </span>
            <span>
              <i className='fab fa-linkedin'></i>
            </span>
            <span>
              <i className='fab fa-youtube'></i>
            </span>
          </div>
        </div>
        <div className='footer-body'>
          <div className='product'>
            <p>product</p>
            <ul>
              <li>Design</li>
              <li>Blog</li>
              <li>Conatct</li>
              <li>Customer</li>
              <li>Feebback</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className='quicki-links'>
            <p>Quick links</p>
            <ul>
              <li>Dashboard</li>
              <li>Testimonials</li>
              <li>Statistics</li>
              <li>Articles</li>
              <li>Pricing</li>
              <li>Summary</li>
            </ul>
          </div>
        </div>
      </div>
      <p className='rights'>
        {date} All rights resverved. @floral creative designs
      </p>
    </footer>
  );
};

export default Footer;
