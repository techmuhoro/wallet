import './Nav.css';
import Logo from './logo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='logo'>
        <div className='logo-wrapper'>
          <img src={Logo} alt='logo' />
          <h1>E-wallet</h1>
        </div>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <span>
              <i className='fas fa-hammer'></i>
            </span>
            Features
          </li>
          <li>
            <span>
              <i className='fas fa-hand'></i>
            </span>
            Pricing
          </li>
          <li>
            <span>
              <i className='fas fa-hand'></i>
            </span>
            Pricing
          </li>
        </ul>
      </div>
      <div className='right'>
        <div className='header-button'>
          <Link to='/'>Sign in</Link>
        </div>
        <div className='header-humburger'>
          <span>
            <i className='fas fa-bars'></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
