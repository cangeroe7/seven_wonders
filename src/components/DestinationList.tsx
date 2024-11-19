import React from 'react';
import DestinationCard from './DestinationCard';
import { Destination } from '../types';

interface DestinationListProps {
    destinations: Destination[];
}

const DestinationList: React.FC<DestinationListProps> = ({ destinations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map((dest) => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </div>
  );
};

export default DestinationList;

