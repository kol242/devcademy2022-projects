import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import '../Common/Style/login.css'

const theme = createTheme({
    palette: {
        primary: {
            main: '#EF976B'
        },
        secondary: {
            main: '#20C5B5'
        },
    }
})

const Login = () => {
  return (
    <div className="login-body">
        <section className="login-box">
            <h1 id="login-box__title">Log in</h1>
            <h2 id="login-box__subtitle">Get started for free</h2>
            <form id="login-box__form">
            <ThemeProvider theme={theme}>
                <TextField 
                    required
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    color="primary"
                />  
                <TextField 
                    required
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    color="primary"
                />  
            </ThemeProvider>
                <FormControlLabel control={<Checkbox />} label="I accept the Terms and Conditions" />
                <button id="login-box__btn">log in</button>
            </form>
        </section>
    </div>
  )
}

export default Login