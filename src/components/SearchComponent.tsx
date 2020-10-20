import React, { useState } from 'react';
import { Search } from '../assets';
import { useAsync } from 'react-use';

export const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useAsync(async () => {
    //search and then set results
  }, [searchTerm]);

  return (
    <div className='pt-2 relative mx-right text-gray-600  '>
      <input
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none '
        type='search'
        name='search'
        value={searchTerm}
        placeholder='Search'
        onChange={handleChange}
      />
      <button type='submit' className='absolute right-0 top-0 mt-5 mr-4'>
        <Search className='text-gray-600 h-4 w-4 fill-current ' />
      </button>
      {/* {searchTerm && searchResults.length && (
        <ul className='absolute m-0 p-0 shadow-sm max-w-full left-0 list-none text-gray-700 bg-white'>
          {searchResults.map((item) => (
            <li className='w-full' key={item.slug}>
              <Link className='flex' to={`/recipe/${item.slug}`}>
                <span className='m-2'> {item}</span>
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};
