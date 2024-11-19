import React from 'react';
import { Destination } from '../types';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const formattedName = encodeURIComponent(destination.name.toLowerCase().replace(/\s+/g, '-'));

  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{destination.name}</h3>
        <p className="text-gray-600 mb-2">{destination.description}</p>
        <Link
          to={`/destination/${formattedName}`}
          className="text-blue-500 hover:underline inline-block"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;

