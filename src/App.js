import Header from './Components/Header';
import './App.css';
import AboutUs from './Components/AboutUs';
import Gallery from './Components/Gallery';
import Team from './Components/Team';
import Feedback from './Components/Feedback';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='scroll-smooth'>
      <Header />
      <AboutUs />
      <Gallery />
      <Team />
      <Feedback />
      <Contact />
      <Footer />
      <div className='bg-green-500 text-center text-white py-2'>
        Copyright &#169; 2022 By Emeralds zambia
      </div>
    </div>
  );
}

export default App;
