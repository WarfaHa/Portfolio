//Todo
import React from "react";
import "../App.css";

function Portfolio() {
  return (
    <div>
      <section class="card">
        <img
          src={require("../assets/projects/Weather.JPG")}
          alt="spinning top"
        />
        <footer>Weather Forecast</footer>
      </section>
      <section class="card">
        <img src={require("../assets/projects/Virtuoso.JPG")} alt="soap" />
        <footer>Virtuoso</footer>
      </section>
      <section class="card">
        <img
          src={require("../assets/projects/NoteTaker.JPG")}
          alt="toilet paper"
        />
        <footer>Note Taker</footer>
      </section>
      <section class="card">
        <img
          src={require("../assets/projects/TextEditor.JPG")}
          alt="wooden spoons"
        />
        <footer>Text Editor</footer>
      </section>
      <section id="portfolio" class="card">
        <img src={require("../assets/projects/Ecommerce.JPG")} alt="camera" />
        <footer>E-commerce-Back-End</footer>
      </section>
      <section class="card">
        <img src={require("../assets/projects/Employee.JPG")} alt="tablet" />
        <footer>Employee Tracker</footer>
      </section>
    </div>
  );
}

export default Portfolio;
