import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

const Search = () => {
    return (
        <div className='flex items-center rounded-md py-4 px-8 bg-white'>
            <SearchIcon className='h-6 text-gray-400' />
            <input type="text" placeholder='Search for a country'
                className='outline-none pl-4' />
        </div>
    )
}

export default Search