import './App.css';
import { Hero } from './Pages/Hero';
import { Services } from './Pages/Services';
import { Reviews } from './Pages/Reviews';
import { Footer } from './Components/Footer';
import { Contact } from './Pages/Contact';
import { Hamburger } from './Components/Hamburger';
import { WhyUs } from './Components/WhyUs';

function App() {
  return (
    <div className='background-wrapper'>
      <Hamburger/>
      <Hero/>
      <Services/>
      <WhyUs/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
