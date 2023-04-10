//Todo
import React from 'react';
import '../App.css';
import myFile from "../assets/Resume-Warfa-Hassan.pdf";

function Resume() {
    return(
<div id='resume'> <a href={myFile}>Download My Resume</a></div>
);
}


export default Resume;