import { useMapEvents } from 'react-leaflet';

function MapScout({ setProperties }) {
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds();
      const sw = bounds.getSouthWest();
      const ne = bounds.getNorthEast();

      // Fetch homes in this new window
      fetch(`/api/properties/search?sw_lat=${sw.lat}&sw_lng=${sw.lng}&ne_lat=${ne.lat}&ne_lng=${ne.lng}`)
        .then(res => res.json())
        .then(data => setProperties(data));
    },
  });
  return null;
}
