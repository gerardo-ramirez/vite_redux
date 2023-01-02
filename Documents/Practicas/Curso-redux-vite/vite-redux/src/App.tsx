import { useSelector, useDispatch} from 'react-redux'
//useSelector me permite consumir el estado global que hay en el stote
//
import { setUser, unsetUser } from './reducers/user/userSlice';
import { Index } from './pages'; 
import { Home } from './pages/home';
import  { Cart } from './pages/cart';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const { email } = useSelector(state =>state.user);
  const { totalCount } = useSelector(state => state.cart);

  const dispatch = useDispatch();



  return (
    <div className="container">
      <div>
 
      <h1>Vite + React</h1>
        <p>
   
          el email en el store es {email}
        </p>
        <button className='btn btn-primary' onClick={()=>dispatch(setUser({
          email:"juan@gmail.com",
          fullname:"carlos juan",
          token:"12345"
        }))}>
          cambiar user
        </button>
        <button className='btn btn-primary' onClick={() => dispatch(unsetUser())}>
          delete user
        </button>
      </div>
      <div>
        <div className="d-flex py-4">
          <Link className="btn btn-info mx-2" to="/">Login</Link>
          <Link className="btn btn-info mx-2" to="/home">Home</Link>
          <div className="ms-auto">
            <Link className="btn btn-primary position-relative" to="/cart">
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalCount}
                <span className="visually-hidden">products in cart</span>
              </span>
            </Link>
          </div>
          </div>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
