import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Carousel from '../Carousel';
import {
  BLUES,
  SCENE_SLIDES,
  KEVIN_SLIDES,
} from '../constants';

const ColorSlide = (color: string) => {
  return (
    <div>
      <div className='color-background' style={{ backgroundColor: color }} />
      <div className='color-text'>
        {color.toUpperCase()}
      </div>
    </div>
  );
};

const COLOR_SLIDES_BLUES = BLUES.map(ColorSlide);

const Playground = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='screen'>
      <div className='playground-heading'>
        <span className='screen-heading'>PLAYGROUND</span>
        {
          open
            ? <FaAngleUp onClick={() => setOpen(false)} className='playground-menu' />
            : <FaAngleDown onClick={() => setOpen(true)} className='playground-menu' />
        }
      </div>
      <div className='playground-nav'>
        {open && (
          <div className='playground-nav-row'>
            <Link className='playground-nav-link' to='/coffee'>COFFEE</Link>
            <Link className='playground-nav-link' to='/design'>DESIGN</Link>
          </div>
        )}
      </div>
      <div className='playground-carousels'>
        <Carousel slides={KEVIN_SLIDES} width='400px' height='400px'/>
        <Carousel background='#F2F2F2' slides={COLOR_SLIDES_BLUES} width='400px' height='400px'/>
        <Carousel slides={SCENE_SLIDES} width='400px' height='400px'/>
      </div>
    </div>
  );
};

export default Playground;
