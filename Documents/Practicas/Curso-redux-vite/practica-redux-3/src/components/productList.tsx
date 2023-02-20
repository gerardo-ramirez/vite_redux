import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart, resetCart } from '../redux/reducers/cartSlice';

export const ProductList = ({ products }) => {

    const { productList } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const handleAddOrRemoveProduct = (product) => {
        const pdtSelected = productList.find(el=> el.id === product.id) ;
        if(pdtSelected){
            dispatch(removeProductFromCart(product.id))
        }else{
            dispatch(addProductToCart(product));
        }
     }
     const cleanCart = ()=>{
        dispatch(resetCart());
     }
    return (
        <>
            <h2>Listado de productos</h2>
            <div className="row">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="col-3 mt-3">
                            <h4>{product.name}</h4>
                            <p>
                                <b>Price:</b> {product.price}
                            </p>
                            <p>
                                <b>Category:</b> {product.category}
                            </p> 
                               <button
                                className={`btn ${productList.find((pdt) => pdt.id === product.id)
                                        ? "btn-danger"
                                        : "btn-success"
                                    }`}
                                onClick={() => handleAddOrRemoveProduct(product)}
                            >
                                {productList.find((pdt) => pdt.id === product.id)
                                    ? "Remove"
                                    : "Add"}{" "}
                                to Cart
                            </button>
                            <button className='btn btn-warning ml-4' onClick={() => cleanCart()}>
                                    Clean cart
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}