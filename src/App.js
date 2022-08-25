import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />

        <footer>
          This project is coded by{" "}
          <a
            href="https://github.com/marne-dp/react-weather-app2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marne du Preez
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/marne-dp/react-weather-app2"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on Netlify.
        </footer>
      </div>
    </div>
  );
}
