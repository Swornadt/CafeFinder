
export function mapFlyTo(map, cafe) {
  if (!map || !cafe) return;
  map.flyTo([cafe.lat, cafe.lon], 18, { duration: 2.5 });
}