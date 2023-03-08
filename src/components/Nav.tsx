import React from "react";
import { Link } from "react-router-dom";

const Nav = (props: { nombre: string, setNombre: (nombre: string) => void, setIsLoggedIn: (isLoggedIn: boolean) => void}) => {
    
    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

        props.setNombre('');
        props.setIsLoggedIn(false);
    }

    let menu;

    if (props.nombre === ''){
        menu = (
            <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                <li className='nav-item active'>
                    <Link className='nav-link' to='/login'>Login</Link>
                </li>
            </ul>
        )
    }else{
        menu = (
            <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                <li className='nav-item active'>
                    <Link to="/principal" className="nav-link">Principal</Link>
                </li>
                <li className='nav-item active'>
                    <Link to="/clientes" className="nav-link">Clientes</Link>
                </li>
                <li className='nav-item active'>
                    <Link to="/planes" className="nav-link">Planes</Link>
                </li>
                <li className='nav-item active'>
                    <Link to="/ingresos" className="nav-link">Ingresos</Link>
                </li>
                <li className='nav-item active'>
                    <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
                </li>
            </ul>
        )
    }

    return(
        <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to="/">Home</Link>
                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;