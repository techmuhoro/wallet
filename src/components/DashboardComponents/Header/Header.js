import './Header.css';
import avatar from './avatar1.jpg';
import { useState } from 'react';

const Header = ({ settings, sidebarShow: [showSidebar, setShowSidebar] }) => {
  const [show, setShow] = useState(false);
  const [full, setFull] = settings;
  const toggleDropdown = () => setShow(!show);
  return (
    <div className='header'>
      <div className='bars'>
        <span
          onClick={() => {
            setFull(!full);
          }}
        >
          <i className='fas fa-bars'></i>
        </span>
        <span
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <i className='fas fa-bars'></i>
        </span>
      </div>
      <div className='header-content'>
        <div className='notification'>
          <div>
            <span>
              <i className='fas fa-bell'></i>
            </span>
          </div>
          <div className='toast'>
            <span>2</span>
          </div>
        </div>
        <div className='profile'>
          <div className='profile-img' onClick={toggleDropdown}>
            <img src={avatar} alt='avatar' />
          </div>
          <p onClick={toggleDropdown}>
            <i className='fas fa-chevron-down'></i>
          </p>
          <div
            className={show ? 'profile-dropdown show' : 'profile-dropdown'}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
