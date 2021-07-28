import './Hero.css';
import heroImage from './hero-image.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='shapes'>
        <div className='circle-1' />
        <div className='circle-2' />
      </div>
      <div className='hero-content'>
        <div className='main-message'>
          <h1>Manage your finance</h1>
          <h1>
            In one <span>place</span>
          </h1>
        </div>
        <div className='hero-image'>
          <img src={heroImage} alt='hero' />
        </div>
        <div className='secondary-message'>
          <p>
            Keep your finances binace by managing them all in a single place.
            Control your finanace control your life.
          </p>
        </div>
        <div className='hero-cta'>
          <Link to='/dashboard'>
            <span className='a-text'>Get started</span>
            <span>
              <i className='fas fa-arrow-right'></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
