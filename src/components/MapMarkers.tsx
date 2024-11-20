import React from "react";
import { Marker } from "react-simple-maps";
import { Link } from "react-router-dom";
import { Destination } from "../types";

interface MapMarkersProps {
  destinations: Destination[];
  selectedMarker: string | "1";
  onMarkerEnter: (destination: Destination) => void;
}

const MapMarkers: React.FC<MapMarkersProps> = ({
  destinations,
  selectedMarker,
  onMarkerEnter,
}) => {
  return (
    <>
      {destinations.map((destination) => (
        <Marker
          key={destination.id}
          coordinates={destination.coordinates}
          onMouseEnter={() => onMarkerEnter(destination)}
        >
          <Link
            to={`/destination/${encodeURIComponent(
              destination.name.toLowerCase().replace(/\s+/g, "-")
            )}`}
            className="cursor-pointer"
          >
            {/* Marker Circle */}
            <circle
              r={9}
              opacity={0.6}
              fill={selectedMarker === destination.id ? "rgba(197, 34, 13, 0.3)" : "#FFFFFF" } // Red if selected, orange otherwise
            >

            </circle>
            <circle
              r={5}
              fill={selectedMarker === destination.id ? "#C5220D" : "#EDC230"} />
            {/* Box and Text */}
              {/* Background Rectangle */}
              <rect
                x={-destination.name.length*3.5}
                y={-35}
                width={destination.name.length*7}
                height={20}
                fill={
                  selectedMarker === destination.id ? "#C5220D" : "#FFFFFF"
                } // Red when selected, white otherwise
              />
              {/* Destination Name */}
              <text
                textAnchor="middle"
                y={-20}
                fill={selectedMarker === destination.id ? "white" : "black"}
                className={`text-sm ${selectedMarker === destination.id
                  ? "white"
                  : "black"
                  }`}
              >
                {destination.name}
              </text>
          </Link>
        </Marker>
      ))}
    </>
  );
};

export default MapMarkers;

