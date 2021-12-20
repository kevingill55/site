import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_LINKS } from './constants';

const Navigation = () => {
  return (
    <div className='nav-container'>
      <div style={{ minWidth: '25%' }}>
        <Link to='/' className='nav-item'>KEVIN GILL</Link>
      </div>
      <div className='nav'>
        <Link to='/about' className='nav-item'>ABOUT</Link>
        <Link to='/experience' className='nav-item'>EXPERIENCE</Link>
        <Link to='/playground' className='nav-item'>PLAYGROUND</Link>
        {
          PERSONAL_LINKS.map(({ icon, link }) => (
            <a
              key={link}
              href={link}
              className='nav-item'
              target='_blank'
              rel='noreferrer'
            >
              {React.createElement(icon)}
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default Navigation;
