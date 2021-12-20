import React from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

interface CarouselControlsType {
  numItems: number,
  current: number,
  setCurrent: ((prevState: number) => void),
}

const onNext = (props: CarouselControlsType) => {
  const { current, setCurrent, numItems } = props;
  setCurrent(
    current === numItems - 1
      ? 0
      : current + 1
  );
};

const onPrevious = (props: CarouselControlsType) => {
  const { numItems, current, setCurrent } = props;
  setCurrent(
    current === 0
      ? numItems - 1
      : current - 1
  );
};

const CarouselControls = (props: CarouselControlsType) => {
  const { numItems, current } = props;
  return (
    <div className='carousel-controls'>
      <div className='arrow'>
        <div
          className='arrow-button'
          onClick={() => onPrevious(props)}
        >
          <FaAngleLeft />
        </div>
      </div>
      <div className='arrow' style={{ right: '0' }}>
        <div  
          className='arrow-button'
          onClick={() => onNext(props)}
        >
          <FaAngleRight />
        </div>
      </div>

      <div className='carousel-controls-indicators'>
        {Array.from(Array(numItems).keys()).map((_, index) => (
          <div
            key={index}
            className={index === current ? 'carousel-controls-dot active-dot' : 'carousel-controls-dot'}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselControls;
