import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import '../Signup.css'

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    const navigate = useNavigate();

    return (
      <div className="image">
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Character Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Character" />
            <label htmlFor="email">Battletag Info</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="BattleTag" id="email" name="email" />
            <label htmlFor="password">Discord</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Discord" id="password" name="password" />
            <button onClick={() => navigate('/')} type="submit">Apply Now</button>
        </form>
        </div>
        
    </div>
    )
}

export default Signup



