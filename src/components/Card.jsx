import Image from 'next/image'
import React from 'react'

const Card = ({ flag, population, region, capital, name }) => {
    return (
        <div className='flex flex-col space-y-2 bg-white shadow-md m-4 cursor-pointer hover:scale-105 transition transform duration-500  ease-out'>
            <div className='relative h-40 w-25'>
                <Image src={flag} alt={name} object-fit={'contain'} layout={'fill'} className='rounded-lg' />
            </div>
            <div className='p-4'>
                <h3 className='font-bold pb-4 whitespace-nowrap text-ellipsis overflow-hidden'>{name}</h3>
                <div className='space-x-2'>
                    <span className='font-bold'>Population:</span>
                    <span>{population}</span>
                </div>
                <div className='space-x-2'>
                    <span className='font-bold'>Region:</span>
                    <span>{region}</span>
                </div>
                <div className='space-x-2'>
                    <span className='font-bold'>Capital:</span>
                    <span>{capital}</span>
                </div>
            </div>
        </div>
    )
}

export default Card