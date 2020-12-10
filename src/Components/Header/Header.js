import React from "react";
import "./Header.css";
// here, it doesn't use Link tag, so doesn't need BrowserRouter!!!
export default () => (
  <header className="nav">
    <ul>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </ul>
  </header>
);
