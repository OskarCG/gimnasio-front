import React, {useState, SyntheticEvent} from "react";
import { Navigate } from 'react-router-dom';

const Login = (props: { setNombre: (nombre: string) => void, setIsLoggedIn: (isLoggedIn: boolean) => void}) => {
    const [email,setEmail] = useState('');
    const [contrasenia,setContrasenia] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                contrasenia
            })
        });
        
        const content = await response.json();
        
    
        props.setNombre(content.Nombre);
        props.setIsLoggedIn(true);

        setRedirect(true);
        
    }

    
    if (redirect) {
        return <Navigate to="/principal"/>;
    }


    return (
        <div className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <input type="email" className="form-control" placeholder="Email address" required
                onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                onChange={e => setContrasenia(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
        
    );
};

export default Login;