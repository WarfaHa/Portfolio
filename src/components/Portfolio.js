//Todo
import React from "react";
import "../App.css";

function Portfolio() {
  return (
    <div> <a href="https://github.com/lutz143/steam-up">
      <section class="card">
        <img
          src={require("../assets/projects/STEAMUPHOME.png")}
          alt="Steam Up"
        />
        <footer>Steam Up</footer>
      </section>
      </a>
      <a href="https://github.com/RetroTechCode/virtuoso">
      <section class="card">
        <img src={require("../assets/projects/Virtuoso.JPG")} alt="Music App" />
        <footer>Virtuoso</footer>
      </section>
      </a>
      <a href="https://github.com/WarfaHa/Note-Taker-App">
      <section class="card">
        <img
          src={require("../assets/projects/NoteTaker.JPG")}
          alt="Sticky Note"
        />
        <footer>Note Taker</footer>
      </section>
      </a>
      <a href="https://github.com/WarfaHa/Text-Editor">
      <section class="card">
        <img
          src={require("../assets/projects/TextEditor.JPG")}
          alt="text editor"
        />
        <footer>Text Editor</footer>
      </section>
      </a>
      <a href="https://github.com/WarfaHa/ORM-E-commerce-Back-End">
      <section id="portfolio" class="card">
        <img src={require("../assets/projects/Ecommerce.JPG")} alt="ecommerce" />
        <footer>E-commerce-Back-End</footer>
      </section>
      </a>
      <a href="https://github.com/WarfaHa/Employee-Tracker">
      <section class="card">
        <img src={require("../assets/projects/Employee.JPG")} alt="employee tracker" />
        <footer>Employee Tracker</footer>
      </section>
      </a>
      
    </div>
  );
}

export default Portfolio;
