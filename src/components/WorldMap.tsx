import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { destinations } from "../data/destinations";
import worldMap from "../data/world_map.json";
import MapMarkers from "./MapMarkers";
import { Destination } from "../types";
import PictureSection from "./PictureSection";

const WorldMap: React.FC = () => {
  const [hoveredDestination, setHoveredDestination] = useState<Destination>(destinations[0]);

  const handleMouseEnter = (destination: Destination) => {
    setHoveredDestination(destination);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-4">
      <PictureSection
        name={hoveredDestination.name}
        description={hoveredDestination.shortDesc}
        image={hoveredDestination.image}
      />
      <div className="w-full lg:w-2/3">

        <ComposableMap
          projectionConfig={{ scale: 180, center: [20, 10] }}
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
          <MapMarkers
            destinations={destinations}
            selectedMarker={hoveredDestination.id}
            onMarkerEnter={handleMouseEnter}
          />
        </ComposableMap>
      </div>

    </div>
  );
};

export default WorldMap;
