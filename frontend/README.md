🗺️ Map & Marker System (Leaflet)

Integrated Leaflet map in React and displayed cafes as markers.

Implemented custom map center state (center) and dynamic updates.

Created a MapFlyTo feature:

Map animates and zooms into a cafe when a card is clicked.

Selected marker is highlighted with a custom icon.

Handled marker customization:

Changed default marker icons for cafes and user location.

Fixed asset import path issues and ensured proper contrast.

📍 Geolocation & User Position

Implemented getUserLocation() utility using navigator.geolocation API:

Graceful fallback to default location if access is denied.

Clean separation of logic into a reusable function.

Displayed user’s current location as a map marker.

Used the user’s location as a reference point for distance calculations.

🧠 Distance & Proximity Logic

Learned and implemented the Haversine formula to calculate distance between two latitude/longitude points.

Used distance calculations to:

Filter cafes and sort by proximity.

Display only the nearest 10 cafes relative to user location or search center.

🔎 Search & Geocoding

Added location search functionality:

Used a backend endpoint (/api/geocode) to convert text queries into coordinates.

Queried backend (/api/cafes) to find cafes near the searched region.

Combined geocoding result and user location to find nearest cafes in a region.

🧰 Code Organization & Refactoring

Refactored core logic out of App.jsx into separate utility files for maintainability:

getUserLocation.js — geolocation logic.

getDistance.js — Haversine formula utility.

fetchCafes.js — combined geocoding, cafe fetching, and distance filtering.

Improved readability and reusability of codebase.

🧑‍💻 UI & UX Enhancements

Adjusted map size and layout to improve balance with the cafe list.

Limited the list length to nearest results for cleaner UI.

Plan to show distance in cafe cards (enabled by Haversine logic).

Discussed dynamic highlighting of markers when selected.

Prepared UI for responsive, user-centered design (show relevant, nearby data first).


| Concept                         | What You Did / Learned                                        |
| ------------------------------- | ------------------------------------------------------------- |
| **React state & props**         | Used state to control map center, selected cafe, and loading. |
| **Leaflet Map API**             | Implemented dynamic fly-to, custom markers, and map layers.   |
| **Geolocation API**             | Accessed user’s location and used it in calculations.         |
| **Haversine Formula**           | Calculated real-world distances between coordinates.          |
| **Async/Await & Promises**      | Managed asynchronous API calls cleanly.                       |
| **Axios**                       | Used for geocoding and fetching nearby cafes from backend.    |
| **Refactoring & modular code**  | Separated logic into utilities to keep components lean.       |
| **Error handling & fallback**   | Handled geolocation errors and search input validation.       |
| **Dynamic filtering & sorting** | Prioritized cafes by proximity.                               |
