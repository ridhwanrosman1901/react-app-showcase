import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <h1>Welcome to my React Application Showcase!</h1>
      <p>Hello! I'm Ridhwan Rosman, this website is a reflection of the skills and knowledge I've gained through hands-on projects and learning experiences.</p>
      <p>What You'll Find Here:</p>
      <ul>
        <li><Link to='/about'>About the Application</Link></li>
        <li><Link to='/skills'>Skills Demonstrated</Link></li>
        <li><Link to='/fetch-data'>Fetch API Data</Link></li>
        <li><Link to='/task'>Mini Project: To-Do-List App</Link></li>
      </ul>
    </div>
  );
}

export default Home;
