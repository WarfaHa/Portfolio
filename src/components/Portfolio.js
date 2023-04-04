//Todo
import React from 'react';
import './App.css';

function Portfolio() {
    return(
<div><section id="work" class="card">
          <img src="./assets/images/Weather.jpg" alt="camera" />
          <footer>Weather Forecast</footer>
        </section>
        <section class="card">
          <img src="./assets/images/Calculator.jpg" alt="tablet" />
          <footer>Calculator</footer>
        </section>
        <section class="card">
          <img src="./assets/images/Notes.jpg" alt="toilet paper" />
          <footer>Sticky Notes</footer>
        </section>
        <section class="card">
          <img src="./assets/images/Wedding.jpg" alt="wooden spoons" />
          <footer>Save The Date: Wedding Invitations</footer>
        </section>
        <section class="card">
          <img src="./assets/images/Restaurant.jpg" alt="soap" />
          <footer>Gourmet Food Catering </footer>
        </section>
        <section class="card">
          <img src="./assets/images/Fitness.jpg" alt="spinning top" />
          <footer>Fitness Tracker</footer>
        </section></div>
);
}


export default Portfolio;