import React from 'react';

const Principal = (props: { nombre: string}) =>{

    

    return(
        <div>
           {props.nombre ? 'Hi ' + props.nombre : 'You are not logged in'}
        </div>
    );
}

export default Principal;