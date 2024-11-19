import React from 'react';
import { destinations } from '../data/destinations';
import DestinationList from '../components/DestinationList';

const Destinations: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Explore Destinations</h2>
      <DestinationList destinations={destinations} />
    </div>
  );
};

export default Destinations;

