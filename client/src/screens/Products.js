import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>{params.slug}</div>
  )
}

export default Products