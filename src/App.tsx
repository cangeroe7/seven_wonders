import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import Header from './components/Header';

const App: React.FC = () => (
  <Router basename="/seven_wonders">
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:name" element={<DestinationDetails />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
