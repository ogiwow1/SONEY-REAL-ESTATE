import React, { useState } from 'react';

const PropertyCard = ({ property }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
    <img src={property.images[0]} alt="Property" className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-2xl font-bold">${property.price.toLocaleString()}</h2>
      <p className="text-gray-600">{property.beds} bd | {property.baths} ba | {property.sqft} sqft</p>
      <p className="text-sm text-gray-500 truncate">{property.address}</p>
      <div className="mt-2 text-blue-600 font-semibold text-xs uppercase">
        SONEY Estimate: ${property.zestimate.toLocaleString()}
      </div>
    </div>
  </div>
);

export default function SoneyApp() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white p-4 flex justify-between items-center border-b">
        <h1 className="text-3xl font-black text-blue-600">SONEY</h1>
        <div className="space-x-4">
          <button className="hover:text-blue-500">Buy</button>
          <button className="hover:text-blue-500">Rent</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
        </div>
      </nav>

      {/* Hero Search */}
      <div className="py-12 px-4 text-center bg-blue-50">
        <h2 className="text-4xl font-bold mb-6">Find it. Tour it. Own it.</h2>
        <input 
          type="text" 
          placeholder="Enter an address, neighborhood, or ZIP code"
          className="w-full max-w-2xl p-4 rounded-full border-2 border-gray-200 focus:border-blue-500 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Listings Grid */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mock data mapping would go here */}
        <p className="col-span-3 text-center text-gray-400 italic">
          Connecting to SONEY MLS Feed...
        </p>
      </div>
    </div>
  );
}

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapTracker({ onBoundsChange }) {
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds();
      onBoundsChange({
        nelat: bounds.getNorthEast().lat,
        nelng: bounds.getNorthEast().lng,
        swlat: bounds.getSouthWest().lat,
        swlng: bounds.getSouthWest().lng
      });
    },
  });
  return null;
}

const SoneyMap = ({ properties, setBounds }) => {
  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-inner">
      <MapContainer center={[40.7128, -74.0060]} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapTracker onBoundsChange={setBounds} />
        
        {properties.map(prop => (
          <Marker key={prop._id} position={[prop.coordinates.lat, prop.coordinates.lng]}>
            <Popup>
              <div className="font-sans">
                <img src={prop.images[0]} className="w-full rounded" alt="home" />
                <h3 className="font-bold text-lg mt-2">${prop.price.toLocaleString()}</h3>
                <p className="text-xs text-gray-600">{prop.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
