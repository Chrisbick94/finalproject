import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import Axios from 'axios'
import '../Signup.css'

export const Signup = (props) => {

    const register = () =>{
        Axios.post('https://localhost3001/sign-up', {
            username: usernameReg, 
            password: passwordReg,
        }).then((response) =>{
            console.log(response);
        })

    }

    
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    const navigate = useNavigate();

    return (
      <div className="image">
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input value={usernameReg} onChange={(e) => setUsernameReg(e.target.value)} name="Username" id="name" placeholder="Username" />
            <label htmlFor="password">Password</label>
            <input value={passwordReg} onChange={(e) => setPasswordReg(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <Button className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' onClick={register}>Register</Button>
          <button className="link-btn" onClick={() => navigate('/login')}>Already have an account? Register here.</button>
        </form>
        </div>
        
    </div>
    )
}

export default Signup



