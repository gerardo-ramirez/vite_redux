import { Person } from '@/models';
import { addFavorite } from '@/redux/states/favorites';
import { addPeople } from '@/redux/states/people';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
export interface peopleTableInterface {}

const PeopleTable: React.FC<peopleTableInterface> = () => {
    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
    const pageSize = 5;
    const dispatch = useDispatch();
    //usamos 
    const peopleFromStore = useSelector(state => state.people)
    const favoritesFromStore = useSelector(state => state.favorites)


console.log(favoritesFromStore);
    //funciones
    const findPerson = (person: Person) => !!favoritesFromStore.find(p => p.id === person.id);
    const filterPerson = (person: Person) => favoritesFromStore.filter(p => p.id !== person.id);

    const handleChange = (person: Person) => {
        const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
        dispatch(addFavorite(filteredPeople));
        setSelectedPeople(filteredPeople);

    };
    const columns = [
        {
            field: 'actions',
            type: "actions",
            headerName: '',
            sortable: false,
            //flex: 1,
            minWidth: 50,
            renderCell: (params: GridRenderCellParams) => <>{<Checkbox size="small" checked={!!findPerson(params.row)}
                onChange={() => handleChange(params.row)} />}</>
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
            field: 'company',
            headerName: 'Company',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        }
    ]

  useEffect(() => {
    setSelectedPeople(favoritesFromStore)
  }, [favoritesFromStore]);
  

    return (

        <DataGrid
            columns={columns}
            rows={peopleFromStore}
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            rowsPerPageOptions={[pageSize]}
            pageSize={pageSize}
            getRowId={(row: any) => row.id}

        />
    )
}

export default PeopleTable;