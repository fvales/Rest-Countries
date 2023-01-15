import React from 'react'

const CountryFilter = () => {
    return (
        <div>
            <select name="cars" id="cars" className='rounded-md py-4 px-8 bg-white'>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default CountryFilter