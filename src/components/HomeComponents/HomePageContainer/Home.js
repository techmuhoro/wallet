import './Home.css';
import { Header, About, Footer, Testimonials } from '../../';

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
