import './App.css';
import { Hero } from './Pages/Hero';
import { Services } from './Pages/Services';
import { Reviews } from './Pages/Reviews';
import { Footer } from './Components/Footer';
import { Contact } from './Pages/Contact';
function App() {
  return (
    <div className="foreground">
      <Hero/>
      <Services/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
