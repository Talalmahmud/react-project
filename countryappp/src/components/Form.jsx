import React, { memo, useState } from 'react'
import { useEffect } from 'react'
import './Form.css'

const Form = (props) => {
    const [seracCountry, setSearchCountry] = useState("")
    //const [name, setName] = useState('')
    const {getSearchdata} = props

    const handleSearch = (e) =>{
        setSearchCountry(e.target.value)
    }

    useEffect(()=>{
         getSearchdata(seracCountry.toLowerCase())
    },[seracCountry])
    

  return (
    <div>
        <input type="text" value={seracCountry} placeholder='Enter country' onChange={handleSearch}/>
    </div>
  )
}

export default memo (Form)