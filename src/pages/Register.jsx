import React, { useState } from 'react';
import { TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='authpage-container'>
            <img alt='' className='authpage-background' src={require("../assets/pages/auth/background.jpg")} />
            <div className='login-container'>
                <h1 className="login-section login-section-title">Create Account</h1>
                <div className="login-section login-section-email">
                    <TextField style={{ width: "100%" }} label="Email" variant="outlined" />
                </div>
                <div className="login-section login-section-name">
                    <TextField style={{ width: "100%" }} label="Name" variant="outlined" />
                </div>
                <div className="login-section login-section-password">
                    <TextField style={{ width: "100%" }} label="Password" type={!showPassword ? "password" : "text"} variant='outlined' />
                </div>
                <div className="login-section login-section-password">
                    <TextField style={{ width: "100%" }} label="Confirm Password" type={!showPassword ? "password" : "text"} variant='outlined' />
                    {showPassword === false ?
                        <VisibilityIcon
                            style={{ position: "absolute", right: "0", height: "100%", padding: "0px 10px", cursor: "pointer" }}
                            onClick={() => setShowPassword(true)}
                        /> : <VisibilityOffIcon
                            style={{ position: "absolute", right: "0", height: "100%", padding: "0px 10px" }}
                            onClick={() => setShowPassword(false)}
                        />}
                </div>
                <button className="login-section login-section-button">Create</button>
                <div className='login-section login-section-link'>
                    <p>Already Has An Account? <Link to="/auth-login">Click here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register