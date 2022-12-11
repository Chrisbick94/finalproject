import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

import '../Signup.css'

export const Login = (props) => {
   
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    const navigate = useNavigate();

    return (
      <div className="image">
        <div className="auth-form-container">
            <h2>Log In</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="Username" id="name" placeholder="Username" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <a className="" onClick={() => navigate('/')} type="submit">Log in!</a>
        </Button>
            
        </form>
        </div>
        
    </div>
    )
}

export default Login