import './App.css';
import './style.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks:symbol" element={<Stock />} />
        <Route path="/stocks" element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default App;
