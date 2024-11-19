import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { destinations } from "../data/destinations";
import worldMap from "../data/world_map.json"
import { Link } from "react-router-dom";

const WorldMap: React.FC = () => {
  return (
    <div className="w-full lg:w-2/3">
      <ComposableMap
        projectionConfig={{ scale: 185, center: [15, 10] }}
        className="rounded-md shadow-md"
      >
        <Geographies geography={worldMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#E5E7EB",
                    stroke: "#D1D5DB",
                    pointerEvents: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
        {destinations.map((destination) => (
          <Marker
            key={destination.id}
            coordinates={destination.coordinates}
          >
            <Link
              to={`/destination/${encodeURIComponent(destination.name.toLowerCase().replace(/\s+/g, '-'))}`}
              className="cursor-pointer"
            >            <circle r={6} fill="#FF5733" className="hover:fill-blue-500"/>
              <text
                textAnchor="middle"
                y={-10}
                className="text-sm text-gray-800 pointer-events-none"
              >
                {destination.name}
              </text>
            </Link>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}

export default WorldMap
