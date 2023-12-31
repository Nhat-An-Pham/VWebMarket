import React, { useState } from 'react';
import { TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className='authpage-container'>
            <img alt='' className='authpage-background' src={require("../assets/pages/auth/background.jpg")} />
            <div className='login-container'>
                <h1 className="login-section login-section-title">Welcome Back</h1>
                <div className="login-section login-section-email">
                    <TextField style={{ width: "100%" }} label="Email" variant="outlined" />
                </div>
                <div className="login-section login-section-password">
                    <TextField style={{ width: "100%" }} label="Password" type={!showPassword ? "password" : "text"} variant='outlined' />
                    {showPassword === false ?
                        <VisibilityIcon
                            style={{ position: "absolute", right: "0", height: "100%", padding: "0px 10px", cursor: "pointer" }}
                            onClick={() => setShowPassword(true)}
                        /> : <VisibilityOffIcon
                            style={{ position: "absolute", right: "0", height: "100%", padding: "0px 10px" }}
                            onClick={() => setShowPassword(false)}
                        />}
                </div>
                <button className="login-section login-section-button">Login</button>
                <div className='login-section login-section-link'>
                    <p>Haven't got an account yet? <Link to="/auth-register">register here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login