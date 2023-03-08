import React, {useState, useEffect} from 'react';
import DataTable from "react-data-table-component";



const columns = [
    {
        name: 'Nombre',
        selector: (row: any) => row.Nombre,
    },
    {
        name: 'Precio',
        selector: (row: any) => row.Precio,
    },
    {
        name: 'Duracion',
        selector: (row: any) => row.Duracion,
    },
];


const Planes = () =>{

    const [planes, setPlanes] = useState( [] )

    const endpoint = 'http://localhost:8080/api/planes'

    const showData = async () => {
        const response = await fetch(endpoint, {
            method: 'GET',
        })
        const data = await response.json()
        setPlanes(data)
    }

    useEffect( () =>{
        showData()
    }, [])

    return(
        
        <div>
            <h1>Planes</h1>
            <DataTable
                columns={columns}
                data={planes}
                pagination
            />
        </div>
        
    );
}

export default Planes