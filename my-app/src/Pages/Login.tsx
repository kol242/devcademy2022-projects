import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()
    const [checked, setChecked] = React.useState(false)
    const [error, setError] = React.useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const loginData = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        }
        if (!checked) {
            setError(true)  
        } else {
            setError(false)
            console.log(loginData)
        }
        //localStorage.setItem("email", "test@mail.com")
        navigate('/')
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
                    { error && <p id="login-box__alert">Accept Terms and Conditions!</p>   } 
                </div>                     
                <button id="login-box__btn">log in</button>
            </form>
        </section>
    </div>
  )
}

export default Login