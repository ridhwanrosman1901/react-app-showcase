import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div>
      <h1>About the Application</h1>
      <p>Welcome to the "About the Application" page! This section provides an overview of the key aspects of this React application and the technologies used to build it.</p>
      
      <h2>1. Application Overview</h2>
      <p>This React application serves as a showcase for my development skills, featuring a range of functionalities designed to offer an engaging user experience. Here’s a brief overview of the different pages included:</p>
      
      <h3>Home</h3>
      <p>The home page provides a welcoming introduction to the application. It highlights the key sections available: the About page, Skills Demonstrated, Fetch API Data, and the Mini Project: To-Do-List App.</p>
      
      <h3>About</h3>
      <p>This page gives a detailed overview of the application, its purpose, and the technologies used. It covers the application's features, development highlights, learning outcomes, and future enhancements.</p>
      
      <h3>Skills Demonstrated</h3>
      <p>The Skills Demonstrated page showcases various React features and techniques applied in the application. It includes practical examples of React Hooks like useState, useEffect, useReducer, and useMemo, along with their use cases and implementations.</p>
      
      <h3>Fetch API Data</h3>
      <p>This page demonstrates how data is fetched from an external API. It shows a list of products retrieved from the Fake Store API, illustrating how to handle loading states, errors, and displaying fetched data.</p>
      
      <h3>Mini Project: To-Do-List App</h3>
      <p>The To-Do-List app page is a mini project included in the application. It allows users to add and view tasks, providing a simple example of state management and user input handling in React.</p>

      <p>Thank you for visiting the "About the Application" page! If you have any questions or feedback, feel free to get in touch.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default About;
