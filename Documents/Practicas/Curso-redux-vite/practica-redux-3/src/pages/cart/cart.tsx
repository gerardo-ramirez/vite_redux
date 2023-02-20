import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeProductFromCart } from '../../redux/reducers/cartSlice';

export const Cart = () => {
  const { productList } =  useSelector(state =>state.cart)
 const dispatch = useDispatch(); 
 const removeProduct = (id:any)=>{
   dispatch(removeProductFromCart(id))
 }; 

  return (
    <>
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map(product => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td scope="row">{product.name}</td>
                <td scope="row">{product.price}</td>
                <td scope="row">{product.category}</td>
                <td scope="row"><button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
   
  )
}
