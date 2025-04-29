import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter & List</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
