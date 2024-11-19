import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';

const App: React.FC = () => (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 text-white py-4 text-center">
          <h1 className="text-3xl font-bold">Travel Destination Explorer</h1>
        </header>
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

