import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, unsetUser } from '../reducers/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { ProductList } from '../components/productList';
import axios from 'axios';

//axios.get("http://localhost:3000/products")
export const Home = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
const [products, setProducts] = useState([]);

useEffect(() => {

    axios.get("http://localhost:3000/products")
    .then(response=>{
        setProducts(response.data);
    })
}, [])



   // function 
    const handleLogout= ()=>{
        dispatch(unsetUser());
        navigate('/')
    }
    

  return (
    <div>
          <h2>Home</h2>
          <p>Welcome {user.username} / {user.email}</p>
          <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
          <hr />
          <ProductList products={products} />
    </div>
  )
}
