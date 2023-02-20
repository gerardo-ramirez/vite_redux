import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducers/userSlice'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const [Notuser, setNotUser] = useState(false);


  const emailField = useRef(null);
  const passwordField = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleSubmit =(e)=> {
    e.preventDefault();
    axios.get("http://localhost:3000/users")
      .then(res => {
        let users = res.data;
        const userLogin = users.find(us => us.email === emailField.current.value);
        if (userLogin) {
          dispatch(setUser({
            email: userLogin.email,
            username: userLogin.username,
            password: userLogin.password,
            token: Date.now()
          }));
          navigate('/home')
        } else {
          setNotUser(true);
        }

      })
    
  }; 
  return (
    <div className="row justify-content-center">
      {Notuser ?
      <div>
        <h3>
            El usuario no está registrado
        </h3>
        <h4>
            403
        </h4>
        <button onClick={()=>setNotUser(false)} className='btn btn-secondary'>
          volver a intentar
        </button>
      </div>
      :
        <div className="col-6">
          <h2 className="mb-4">LOGIN FORM</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" ref={emailField} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" ref={passwordField} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      
      }
    </div>
  )
}
