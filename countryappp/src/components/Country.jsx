import React from 'react'
import './Country.css'

const Country = ({country}) => {
  return (
    <div className='card'>
        <img src={country.flags.png} alt="" />
        <p>Name: <span>{country.name.common}</span></p>
        <p>Capital: <span>{country.capital}</span> </p>
        <p>Area: <span>{country.area}</span></p>
        <p>Population: <span>{country.population}</span></p>
        
    </div>
  )
}

export default Country