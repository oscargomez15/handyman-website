import './App.css';
import { Painting } from './Pages/Painting';
import { Home } from './Pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router';
import { Navigation } from './Components/Navigation';
import { Footer } from './Components/Footer';
function App() {
  return (
    <div className='background-wrapper'>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/paint" element={<Painting />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
