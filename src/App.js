import './App.css';
import { Hero } from './Pages/Hero';
import { Services } from './Pages/Services';
import { Reviews } from './Pages/Reviews';
import { Footer } from './Components/Footer';
import { Contact } from './Pages/Contact';
import { Hamburger } from './Components/Hamburger';

function App() {
  return (
    <div className='background-wrapper'>
    <Hamburger/>
      <div className="foreground">
        <Hero/>
        <Services/>
        <Reviews/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
