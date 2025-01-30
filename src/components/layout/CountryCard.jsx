import React from 'react'
import { NavLink } from 'react-router-dom';

const CountryCard = ({country}) => {
  const {flags,name,population,region,capital}=country
  return (
    <li className='border-amber-300 border-1 w-60 p-10 rounded-lg flex flex-col gap-5'>
      <div>
        <img src={flags.svg} alt={flags.alt} className='h-28 w-40' />
      </div>

      <div>
        <p>{name.common}</p>
        <p>
          <span>Population:</span> {population.toString()}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital[0]}
        </p>
      </div>

 
        <NavLink to={`/country/${name.common}`} >
          <button className='bg-blue-500 px-5 py-2'>Read More</button>
        </NavLink>
    
    </li>
  )
}

export default CountryCard