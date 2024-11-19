import React from 'react';
import { useParams } from 'react-router-dom';
import { destinations } from '../data/destinations';

const DestinationDetails: React.FC = () => {
  const { name } = useParams();
  const destination = destinations.find(
    (dest) =>
      encodeURIComponent(dest.name.toLowerCase().replace(/\s+/g, "-")) === name
  );

  if (!destination) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-xl text-red-500 font-bold">Destination not found</p>
          <p className="text-gray-600">
            We couldn't find the destination you're looking for. Please check
            the URL or explore other destinations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{destination.name}</h1>
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-96 object-cover rounded-md mb-6"
      />
      <p className="text-gray-700 leading-relaxed text-lg">{destination.description}</p>
    </div>
  );
};

export default DestinationDetails;

