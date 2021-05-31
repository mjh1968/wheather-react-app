import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WheatherApp">
          <Weather defaultCity="London" />

          <footer>
            <div className="beforeFooter"></div>
            This project was coded by Maria João Hortega and is
            <a
              href="https://github.com/mjh1968/wheather-react-app"
              targert="_blank"
            >
              {" "}
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://elegant-stonebraker-0df042.netlify.app"
              targert="_blank"
            >
              {" "}
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
