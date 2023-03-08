import React, {useState, useEffect} from 'react';
import DataTable from "react-data-table-component";



const columns = [
    {
        name: 'DNI',
        selector: (row: any) => row.DNI,
    },
    {
        name: 'Nombre',
        selector: (row: any) => row.Nombre,
    },
    {
        name: 'Apellido',
        selector: (row: any) => row.Apellido,
    },
    {
        name: 'Email',
        selector: (row: any) => row.Email,
    },
    {
        name: 'Telefono',
        selector: (row: any) => row.Telefono,
    },
];



const Clientes = () =>{

    const [clientes, setClientes] = useState( [] )

    const endpoint = 'http://localhost:3030/api/clientes'

    const showData = async () => {
        const response = await fetch(endpoint, {
            method: 'GET',
        })
        const data = await response.json()
        setClientes(data)
    }

    useEffect( () =>{
        showData()
    }, [])

    return(
        <div>
            <h1>Clientes</h1>
            <DataTable
                columns={columns}
                data={clientes}
                pagination
            />
        </div>
    );
}

export default Clientes;