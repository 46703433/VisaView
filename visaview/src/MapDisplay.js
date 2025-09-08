// MapDisplay.js
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapDisplay = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current._leaflet_id) {
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: '400px', width: '100%' }}
      id="leaflet-map"
    ></div>
  );
};

export default MapDisplay;