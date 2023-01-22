import React, { useState } from 'react'
import { useEffect } from 'react'
import Country from './Country'
import './Countries.css'
import Form from './Form'

const URL = 'https://restcountries.com/v3.1/all'


const Countries = () => {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState('')
    const [totalCountries, setTotalCountries] =useState(countries)

    const fetchData = async (url) =>{
        try {
            let response = await fetch(url)
            let data = await response.json()
            setCountries(data)
            setTotalCountries(data)

            setIsLoading(false)
           // console.log(countries)
        } catch (error) {
            setIsError(error.message)
        }
    }

    useEffect(()=>{
        fetchData(URL)
    },[]);
    

    const searchCountry = (name)=>{
        let newCountries = countries.filter((country) =>{
            const countryName = country.name.common.toLowerCase()
            return countryName.startsWith(name)
        })
        setTotalCountries(newCountries)  
    }

    
  return (
    <div className='countries'>
        {isLoading && <p>Loading.......</p>}
        {isError && <p>{isError}</p>}
        <Form getSearchdata={searchCountry} />


        {countries && totalCountries.map((country) => {
            return <Country key={country.name.common} country={country} />
        })}

    </div>
  )
}

export default Countries