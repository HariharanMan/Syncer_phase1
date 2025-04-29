import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VirtualList from './components/VirtualList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VirtualList />} />
      </Routes>
    </Router>
  );
}

export default App;
