import React, { useState } from 'react';
import CarouselControls from './CarouselControls';
import './Carousel.css';

interface CarouselType {
  width: string,
  height: string,
  background?: string,
  slides: JSX.Element[],
}

const Carousel = (props: CarouselType) => {
  const [current, setCurrent] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      className='carousel-container'
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      style={{
        backgroundColor: props.background || 'transparent',
        width: props.width,
        height: props.height,
      }}
    >
      {(props.slides.length > 1 && mouseOver) && (
        <CarouselControls
          current={current}
          numItems={props.slides.length}
          setCurrent={setCurrent} 
        />
      )}
      {
        props.slides.map((slide, index) => (
          <div
            key={index}
            className={index === current ? 'carousel-child active' : 'carousel-child'}
          >
            {slide}
          </div>
        ))
      }
    </div>
  );
};

export default Carousel;
