import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='screen'>
      <span className='screen-heading'>ME</span>
      <div className='screen-list'>
        <span>LOCATED IN DENVER, COLORADO</span>
        <span>SOFTWARE ENGINEER FOR HEWLETT PACKARD ENTERPRISE</span>
        <span>UNIVERSITY OF MASSACHUSETTS CLASS OF 2020</span>
      </div>

      <span className='screen-heading'>WHAT I DO</span>
      <div className='screen-list'>  
        <Link to='/coffee'>I BREW COFFEE</Link>
        <Link to='/experience'>I WRITE CODE</Link>
        <Link to='/design'>I DESIGN</Link>
      </div>

      <span className='screen-heading'>WHERE I GO</span>
      <div className='screen-list'>
        <span>MASSACHUSETTS</span>
        <span>ISRAEL</span>
        <span>COLORADO</span>
      </div>
    </div>
  );
};

export default About;
