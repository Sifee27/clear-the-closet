import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Legislation } from './pages/Legislation';
import { Civics } from './pages/Civics';
import { Voices } from './pages/Voices';
import { Action } from './pages/Action';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/legislation" element={<Legislation />} />
        <Route path="/civics" element={<Civics />} />
        <Route path="/voices" element={<Voices />} />
        <Route path="/action" element={<Action />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 