🗺️ Map & Marker System (Leaflet)

Integrated Leaflet in React and displayed cafes as markers.

Implemented custom map center state and dynamic updates.

MapFlyTo feature:

Map animates and zooms into a cafe when a card is clicked.

Selected marker is highlighted with a custom icon.

Handled marker customization:

Replaced default markers with custom icons for cafes and user location.

Fixed asset import path issues for icons.

Map height and layout were adjusted to prevent full-page scroll while keeping the cafe list scrollable separately.

📍 Geolocation & User Position

Implemented getUserLocation() utility using navigator.geolocation API:

Graceful fallback to default location if access is denied.

Clean separation of logic into a reusable function.

Displayed user’s current location as a map marker.

Used the user’s location as a reference point for distance calculations.

🧠 Distance & Proximity Logic

Learned and implemented Haversine formula for calculating distances between latitude/longitude points.

Distance used to:

Filter cafes within a dynamic radius.

Sort and display nearest cafes first.

Display distance directly in cafe cards.

Added dynamic radius and max cafe filtering using sliders, updating map and list in real-time.

🔎 Search & Geocoding

Implemented location search with backend /api/geocode endpoint using Nominatim (OpenStreetMap).

Queried backend /api/cafes endpoint to find cafes near the searched location.

Combined geocoding results and user location to compute nearest cafes.

Problems faced:

Initial “q is not defined” error solved by passing the correct query parameter to the Nominatim service.

Debugged coordinate fetching and axios requests for proper integration with React frontend.

🧰 Code Organization & Refactoring

Refactored core logic out of App.jsx into separate utilities:

getUserLocation.js – geolocation logic.

getDistance.js – Haversine formula utility.

fetchCafes.js – combined geocoding, cafe fetching, filtering by distance, and max results.

Backend organized into controllers, routes, and services for clarity:

geocodeController.js, nominatimService.js, cafesController.js, overpassService.js

Improved readability, maintainability, and reusability.

🧑‍💻 UI & UX Enhancements

Refined layout:

Divided page into left and right columns: left for search, controls, and cafe list; right for map.

Adjusted map height to prevent full-page scroll.

Implemented Controls Card:

Combined radius and max cafes sliders in one card.

Sliders visually improved and responsive with modern rounded style.

Updated to dark theme:

Changed background colors, header, search bar, controls, and cafe cards for better contrast.

Cafe cards now display distance in km prominently.

⚡ Problems & Solutions

| Problem                                      | Solution / Debugging                                                                    |
| -------------------------------------------- | --------------------------------------------------------------------------------------- |
| `q is not defined` in geocoding              | Fixed by passing correct parameter to `fetchCoordinates` service.                       |
| Map height causing full-page scroll          | Split layout with left column scrollable (`CafeList`) and map fixed height.             |
| Search sliders not updating map in real-time | Used React `useEffect` on slider state and passed dynamic parameters to fetch function. |
| Marker icon import failing                   | Corrected asset path and ensured Leaflet uses proper image URLs.                        |
| Handling empty search input                  | Added validation in `handleSearch` to alert user.                                       |


🌐 Backend

Built Express server with two endpoints:

/api/geocode – converts text location to coordinates.

/api/cafes – fetches cafes near coordinates using Overpass API.

Used Axios for external API calls.

| Concept                         | Usage / Learning                                                       |
| ------------------------------- | ---------------------------------------------------------------------- |
| **React state & props**         | Controlled map center, selected cafe, loading states, sliders.         |
| **Leaflet Map API**             | Dynamic fly-to, custom markers, map layers, popups.                    |
| **Geolocation API**             | Accessed user’s location for distance calculations.                    |
| **Haversine Formula**           | Calculated real-world distances between coordinates.                   |
| **Async/Await & Promises**      | Managed API calls and data fetching cleanly.                           |
| **Axios**                       | Used for geocoding and fetching nearby cafes.                          |
| **Modular code & refactoring**  | Utilities, controllers, services, routes.                              |
| **Error handling & fallback**   | Handled missing params, API errors, geolocation fallback.              |
| **UI/UX design in React**       | Dark theme, responsive layout, controls card, map/list column layout.  |
| **Dynamic filtering & sorting** | Filtered cafes by radius and max count; updated map/list in real-time. |
| **Tailwind CSS**                | Styled components for modern, responsive, dark theme UI.               |
