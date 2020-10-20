import React from 'react';
import { SpinnerGif } from '../assets';

const Spinner = () => {
  return (
    <div>
      <img
        className='mx-auto object-center'
        src={SpinnerGif}
        alt='Loading...'
      />
    </div>
  );
};

export default Spinner;
