import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Common/Style/login.css'
import AuthContext from '../Store/auth-context'

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
    const navigate = useNavigate()
    const [checked, setChecked] = React.useState(false)
    const [error, setError] = React.useState(false)
    const authCtx = useContext(AuthContext)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
        if (event.target.checked) setError(false) 
    }

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const loginData = {
            email: emailRef.current?.value.toString(),
            password: passwordRef.current?.value,
            loggedIn: true
        }
        if (!checked) {
            setError(true)  
        } else {
            setError(false)
            localStorage.setItem("userToken", JSON.stringify(loginData))
            authCtx.login(loginData.email)
            navigate('/')
        }
    }
  return (
    <div className="login-body">
        <section className="login-box">
            <h1 id="login-box__title">Log in</h1>
            <h2 id="login-box__subtitle">Get started for free</h2>
            <form onSubmit={submitHandler} id="login-box__form">
            <ThemeProvider theme={theme}>
                <TextField 
                    required
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    color="primary"
                    inputRef={emailRef}
                />  
                <TextField 
                    required
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    color="primary"
                    type="password"
                    inputRef={passwordRef}
                />  
            </ThemeProvider>
                <div>
                    <FormControlLabel control={<Checkbox onChange={handleChange} />} label="I accept the Terms and Conditions" />
                    { error && <p id="login-box__alert">Terms and Conditions must be accepted!</p>   } 
                </div>                     
                <button id="login-box__btn">log in</button>
            </form>
        </section>
    </div>
  )
}

export default Login