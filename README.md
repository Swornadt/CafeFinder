# Mapetite – Nearby Cafes & Restaurants Finder ☕🍴

**Mapetite** is a React + Leaflet web application that helps users discover nearby cafes and restaurants with real-time distance filtering and dynamic map interaction. Built with a modern dark theme and responsive layout, it highlights user location and shows the nearest spots dynamically.

## 🌐 Live Demo

Access the app online: https://mapetite.onrender.com/

---

## 🗺️ Features

### Map & Marker System (Leaflet)
- Integrated **Leaflet** in React for interactive maps.
- Displayed cafes/restaurants as custom markers.
- **MapFlyTo:** Animates and zooms into a cafe when selected.
- Selected marker highlighted with a **custom icon**.
- Custom markers for user location and cafes.
- Map height adjusted to prevent full-page scroll; left column scrollable for cafe list.

### Geolocation & User Position
- Implemented **getUserLocation()** using `navigator.geolocation`.
- Graceful fallback to default location if access denied.
- User’s current location displayed on the map.
- User location used as reference for distance calculations.

### Distance & Proximity Logic
- Implemented **Haversine formula** to calculate real-world distances.
- Distance calculations used to:
  - Filter cafes/restaurants within a dynamic radius.
  - Sort and display nearest results first.
  - Display distance directly in cafe cards.
- Dynamic radius and max-cafes filtering with sliders updating map and list in real-time.

### Search & Geocoding
- Location search using **OpenStreetMap Nominatim API** via backend `/api/geocode`.
- Backend `/api/cafes` endpoint fetches nearby cafes/restaurants via **Overpass API**.
- Combined geocoding results and user location to compute nearest results.
- Input validation to handle empty search queries.

### UI & UX Enhancements
- **Dark theme** applied for modern, high-contrast interface.
- Layout divided into **left column** (search, controls, cafe list) and **right column** (map).
- Combined **radius and max results sliders** in one card.
- Sliders are visually modern, rounded, and responsive.
- Cafe cards show **distance**, name, and address prominently.
- Header and footer polished with logo, tagline, and contact links.
- Footer includes links to GitHub, email, and social media.

### Backend
- Express.js server with modular architecture:
  - **Controllers**: `geocodeController.js`, `cafesController.js`
  - **Services**: `nominatimService.js`, `overpassService.js`
  - **Routes**: `geocode.js`, `cafes.js`
- Handles geocoding, nearby cafe fetching, and distance calculations.
- Axios used for external API calls.
- CORS enabled for frontend-backend communication.

---

## ⚡ Problems & Solutions

| Problem | Solution / Debugging |
|---------|--------------------|
| `q is not defined` in geocoding | Fixed by passing the correct query parameter to `fetchCoordinates` service. |
| Map height caused full-page scroll | Split layout: left column scrollable (CafeList), map fixed height. |
| Sliders not updating map in real-time | Used React `useEffect` and passed dynamic parameters to fetch function. |
| Marker icon import failing | Corrected asset path and ensured Leaflet uses proper image URLs. |
| Handling empty search input | Added validation in `handleSearch` with alert. |
| Distance filtering & sorting | Implemented Haversine formula; filtered by radius and sorted by distance dynamically. |

---

## 🧰 Technologies Used

- **Frontend:** React, Tailwind CSS, Leaflet, Axios  
- **Backend:** Node.js, Express.js  
- **APIs:** OpenStreetMap Nominatim (Geocoding), Overpass API (cafes/restaurants)  
- **Concepts Learned:**  
  - React state & props management  
  - Modular code structure & separation of concerns  
  - Async/Await and Promises  
  - Error handling & fallback strategies  
  - Dynamic filtering, sorting, and real-time updates  
  - Responsive UI design and dark theme implementation  

---

## 📬 Contact
- GitHub: https://github.com/Swornadt
- Email: tuladharsworna@gmail.com
- LinkedIn: https://www.linkedin.com/in/sworna-d-tuladhar-a96315311/

---
