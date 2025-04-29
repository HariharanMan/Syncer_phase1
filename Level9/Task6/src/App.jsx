import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrimeCalculator from './components/PrimeCalculator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Prime Calculator</Link>
      </div>
      <Routes>
        <Route path="/" element={<PrimeCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
