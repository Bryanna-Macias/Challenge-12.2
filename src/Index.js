import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import App from './App';
import './index.css'; // Optional: Include global CSS styles

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root for the React application
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
