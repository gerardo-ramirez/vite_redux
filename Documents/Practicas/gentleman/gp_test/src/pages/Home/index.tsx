import React, {useCallback, useEffect, useState}from 'react'
import PropTypes from 'prop-types'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import People from '../../data/people.json';
import {Person} from '../../models'; 
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '@/redux/states/favorites';
import { addPeople } from '@/redux/states/people';
import PeopleTable from './components/peopleTable';
export interface HomeInterface {}

const Home = () => {
 const dispatch = useDispatch();

  useEffect(() => {
   dispatch(addPeople(People)); 
  }, [])
  
  return (
   
     <PeopleTable/>
  )
}


export default Home

