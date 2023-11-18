import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";

function Map() {
  useEffect(() => {
    var map = L.map("map").setView([-7.770400, 110.377834], 19);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      }
    });
    map.addControl(drawControl);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "100vh" }}></div>
    </div>
  );
}

export default Map;
