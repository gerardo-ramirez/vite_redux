import  axios  from 'axios';
import React,{useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, unsetUser } from '../reducers/user/userSlice';
import { useNavigate } from 'react-router-dom';


export const Index = () => {
    const emailField = useRef(null);
    const passwordField = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.get("http://localhost:3000/users")
        .then(res=>{
            const users= res.data;
            const userToLog = users.find(us =>us.email === emailField.current.value);
           
            if(userToLog){
                if (userToLog.password === passwordField.current.value){
                
                    dispatch(setUser({
                        email: userToLog.email,
                        username: userToLog.username,
                        token: Date.now()
                    }));
                    navigate('/home')
                }
            }

        })

    }; 
  return (
      <div className="row justify-content-center">
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
      </div>
  )
}

