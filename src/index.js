import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import "./styles/main.scss"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Determine the theme mode
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Update favicon based on theme
const link = document.querySelector("link[rel~='icon']");
if (link) {
  const faviconPath = prefersDarkMode ? "/favicon-dark.png" : "/favicon-light.png";
  link.href = process.env.PUBLIC_URL + faviconPath;
}

// Listen for theme changes and update favicon accordingly
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  const newSchemeIsDark = e.matches;
  const faviconPath = newSchemeIsDark ? "/favicon-dark.png" : "/favicon-light.png";
  link.href = process.env.PUBLIC_URL + faviconPath;
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
