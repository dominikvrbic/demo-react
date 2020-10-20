import React from 'react';
import { Link } from 'react-router-dom';
import { GithubLogoBlue, InstagramLogo } from '../assets';
import { useWindowSize } from 'react-use';

interface Props {}

export const Footer = (props: Props) => {
  const { width } = useWindowSize();

  return (
    <div className='  w-full flex-shrink-0 flex  items-center bg-gray-100 py-6 md:py-2 h-24'>
      <Link className='font-semibold px-5' to='/'>
        home
      </Link>
      {width > 600 && (
        <div className='text-center w-full'>
          designed & developed by Dominik Vrbić
        </div>
      )}

      <div className='flex ml-auto pr-5'>
        <a
          href='https://www.instagram.com/dominikvrbic/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
          style={{ marginRight: '40px' }}>
          <img className='h-16 w-16' src={InstagramLogo} alt='Instagram Logo' />
        </a>
        <a
          href='https://github.com/dominikvrbic'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='h-16 w-16' src={GithubLogoBlue} alt='Github Logo' />
        </a>
      </div>
    </div>
  );
};
