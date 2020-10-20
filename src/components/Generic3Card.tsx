import React from 'react';

import { Card, Item } from './Card';

interface Props {
  title: string;
  items: Item[];
}

export const Generic3Card = (props: Props) => {
  const { title, items } = props;
  return (
    <div>
      <h1 className='text-3xl text-gray-800 text-center pb-10 '>{title}</h1>
      <div className='flex  pb-10 flex-col justify-center lg:flex-row lg:space-x-20'>
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
