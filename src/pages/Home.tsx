import React from 'react';
import { Link } from 'react-router-dom';
import WorldMap from '../components/WorldMap';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Explore the Seven Natural Wonders of the World
      </h1>
      <div className="flex flex-col lg:flex-row items-center">
        <WorldMap />

      </div>
      <div className="max-w-7xl mt-8 lg:mt-0 lg:ml-12 text-center lg:text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Discover the wonders of our planet! Click on a location on the map
          to learn more about its beauty and significance.
        </p>
        <Link
          to="/destinations"
          className="mt-4 inline-block px-6 py-3 text-white bg-blue-500 rounded shadow hover:bg-blue-600"
        >
          Explore All Destinations
        </Link>
      </div>
    </div>
  );
};

export default Home;

