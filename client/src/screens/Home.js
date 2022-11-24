import { useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import logger from 'use-reducer-logger';


const reducer = (state, action)=>{
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state, loading:true}
    case 'FETCH_SUCCESS':
      return {...state, products:action.payload, loading: false}
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload}
    default:
      return state

  }
}


const Home = () => {

    const [{loading, error, products}, dispatch] = useReducer(logger(reducer),{
      loading: false,
      products: [],
      error: '',
    })

    useEffect(()=>{
      const fetchData = async()=>{
        dispatch({type: 'FETCH_REQUEST' })
        try {
          const result = await axios.get('http://localhost:8000/api/products')
          console.log(result.data)
          dispatch({type: 'FETCH_SUCCESS', payload:result.data})
        } catch (error) {
          dispatch({type: "FETCH_FIAL", payload:error.message})
        }
      }  
      fetchData()     
    },[])
    
  return (
    <div>
        <h1>Featured Products</h1>
        <div className='products'>
        {products.map(product =>
          <div className='product' key={product.name}>
            <Link to={`product/${product.slug}`}>
            <img src={product.image} alt={product.name} />
            </Link>
            <div className='product-info'>
            <Link to={`/product/${product.slug}`}>
            <p>{product.name}</p>
            </Link>
            <p><strong>${product.price}</strong></p>
            <button>Add to cart</button>
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default Home