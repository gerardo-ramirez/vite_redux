import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { ProductList } from '../components/productList'

export const Index = () => {
 
  const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:3000/products").then((response) => {
        setProducts(response.data);
      });
    }, []);
  
  return (
    <div>
      <ProductList products={products} />
    </div>
  )
}
