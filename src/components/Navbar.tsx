import React from 'react';
import { Link } from 'react-router-dom';
import { GithubLogoBlue } from '../assets';

export const Navbar = () => {
  return (
    <div className='flex flex-col  items-center h-42  bg-gray-100  p-5 '>
      <Link to='/'>
        <img src={GithubLogoBlue} alt='hat' className='cursor-pointer' />
      </Link>
      <ul className='flex'></ul>
    </div>
  );
};
