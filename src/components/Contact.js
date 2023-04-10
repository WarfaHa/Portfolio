//Todo
import React from 'react';
import '../App.css';

function Contact() {
    return(
<div id="contact"> 
<h1>Contact Me: </h1>
      <form>
        <label>
          Name: <input type="text" />
        </label><br></br>
        <label>
          Email Address: <input type="email" />
        </label><br></br>
        <label>
          Message: <input type="textarea" />
        </label><br></br>
        <button> Submit </button>
      </form>
    </div>
);
}


export default Contact;