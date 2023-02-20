import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { unsetUser } from '../../redux/reducers/userSlice';

export const Home = () => {
  const {username}=useSelector(state=>state.user); 
  const dispatch = useDispatch();
  useEffect(() => {
  
  
    return () => {
      //dispatch(unsetUser())
      console.log('distroy')
    }
  }, [])
  

  return (
    <div className='container'>
      {username !== ""?
      <div>
         <h1>Hola</h1>
    <h2>{username}!!!</h2>
    </div>
      :
        <div>
          <h1>No hay</h1>
          <h2>nadie!!!</h2>
        </div>
      }
   </div>
  )
}
