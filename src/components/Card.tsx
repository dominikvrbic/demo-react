import React from 'react';

import { Link } from 'react-router-dom';
export interface Item {
  slug: string;
  img: string;
  name: string;
  description: string;
}
interface Props {
  item: Item;
}
export const Card = (props: Props) => {
  const { item } = props;
  return (
    <Link to={`/recipe/${item.slug}`}>
      <div className='max-w-full px-4 mb-6 lg:mb-0 lg:max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl'>
        <img className='w-full' src={item.img} alt='Sunset in the mountains' />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{item.name}</div>
          <p className='text-gray-700 text-base'>{item.description}</p>
        </div>
      </div>
    </Link>
  );
};
