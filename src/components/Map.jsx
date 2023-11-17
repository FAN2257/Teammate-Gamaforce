import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";

function Map() {
  const mapContainer = useRef(null);
  const featureGroupRef = useRef(L.featureGroup());
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map(mapContainer.current).setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      const drawControl = new L.Control.Draw({
        draw: {
          polygon: true,
          polyline: true,
          rectangle: true,
          circle: true,
          marker: true,
        },
        edit: {
          featureGroup: featureGroupRef.current,
          remove: true,
        },
      });

      map.addControl(drawControl);

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        // Clean up when the component is unmounted
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // Empty dependency array to run the effect only once

  return <div ref={mapContainer} style={{ height: "100vh" }}></div>;
}

export default Map;
