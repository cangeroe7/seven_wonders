import React from "react";
import { useLocation, Link } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-blue-500 text-white py-4 flex items-center justify-between px-4">
    {location.pathname !== '/' && (
      <Link
      to="/"
      className="text-white bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded"
      >
      Home
      </Link>
    )}
    <h1 className="text-3xl font-bold text-center flex-grow">
    Travel Destination Explorer
    </h1>
    </header>
  );
};

export default Header
