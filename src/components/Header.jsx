import React from 'react'
import { MoonIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className='flex items-center bg-white justify-between shadow-md px-4 py-8 sm:px-8 sticky z-10'>
            <h1 className='font-bold'>Where in the world?</h1>
            <div className='flex items-center cursor-pointer space-x-2'>
                <MoonIcon className='h-6' />
                <span>Dark Mode</span>
            </div>
        </header>
    )
}

export default Header