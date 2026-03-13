# GoTravel - Travel Booking Web Application

## Overview
Your Next Adventure, Simplified.
GoTravel is a responsive, modern travel booking platform offering a seamless experience for discovering, planning, and managing your dream vacations.
It allows users to explore tours, add trips to a cart, book tours, and manage bookings with full CRUD functionality.  
The app demonstrates modern frontend techniques including state management with React Context, API integration, and responsive design.



## Core Features
Dynamic Discovery: Explore curated tours featuring, pricing, and real-time ratings.
Smart Search: Filter destinations by dates, guest count, and location via the interactive Hero banner.
Cart & Booking System: A streamlined flow to add trips to your itinerary and finalize bookings.
Full CRUD Management: Empower users to modify travel dates, adjust guest numbers, or cancel bookings directly from their profile.
Responsive Excellence: Fully optimized for mobile, tablet, and desktop views using Sass-powered layouts.


## Features
- Responsive UI built with HTML5, CSS3, and Sass.  
- Tour listing with images, location, price, duration, rating, and description.  
- Hero banner with search form for filtering trips by destination, dates, and travelers.  
- Add trips to cart and book trips.  
- Edit booking details (dates, number of travelers) and delete bookings.  
- State management with React Context.  
- Mock RESTful API using JSON Server for data persistence.  
- Interactive CRUD operations with feedback messages.

---

## Project Setup

### Prerequisites
- Node.js (v18+ recommended)  
- npm (v9+)  


### Installation
1. Clone the repository:
```bash
git clone https://github.com/upasana788/go-travel.git

2. Navigate to the project folder:
cd go-travel

3. Install dependencies:
npm install

4. Start the JSON Server for mock API
npx json-server --watch data.json --port 5000

5. Start the React development server
npm run dev

6. Open your browser and navigate to http://localhost:5173 (or the port shown in terminal).


####Design Choices
React Context for global state (cart and bookings) to simplify state management.
Sass for modular, maintainable styling with variables and partials.
JSON Server for mock API, enabling full CRUD operations without a backend.
Responsive layout using CSS Grid/Flexbox and media queries.
Component-based architecture to ensure reusability and readability.



#### Known Issues / Limitations
No real backend; all data is stored in data.json (mock server).
No authentication implemented.
Test coverage is limited to core CRUD operations; UI interaction tests could be extended.
Implementation for search form for filtering trips by destination, dates, and travelers could be extended.



#### Testing
Unit tests for TourContext are available in src/tests/.

Run tests:
npm run test

###Additional Notes
Hero banner images and tour images are located in public/images for modular imports.
Cart sidebar slides in from the right to show selected trips and manage bookings.
Feedback messages inform users of booking success, update, or cancellation.
 

