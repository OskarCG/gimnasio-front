import React, {useState, useEffect} from 'react';
import DataTable from "react-data-table-component";



const columns = [
    {
        name: 'Ingreso',
        selector: (row: any) => row.IngresoId,
    },
    {
        name: 'Nombre',
        selector: (row: any) => row.Nombre,
    },
    {
        name: 'Usuario',
        selector: (row: any) => row.Usuario,
    },
    {
        name: 'Cliente',
        selector: (row: any) => row.Cliente,
    },
    {
        name: 'Monto',
        selector: (row: any) => row.MontoTotal,
    },
    {
        name: 'Fecha',
        selector: (row: any) => row.Fecha,
    },
];

const Suscripciones = () =>{

    const [ingresos, setIngresos] = useState( [] )

    const endpoint = 'http://localhost:8080/api/ingresos/infoingreso'

    const showData = async () => {
        const response = await fetch(endpoint, {
            method: 'GET',
        })
        const data = await response.json()
        setIngresos(data)
    }

    useEffect( () =>{
        showData()
    }, [])


    return(
        <div>
            <h1>Ingresos de Planes</h1>
            
            <DataTable
                columns={columns}
                data={ingresos}
                pagination
            />
            
        </div>
    );
}

export default Suscripciones