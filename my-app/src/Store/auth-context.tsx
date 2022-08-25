import React from 'react'
import useCheckStorage from '../Hooks/use-checkStorage'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token: any) => {},
    logout: () => {}
})

export const AuthContextProvider = (props: any) => {

    const [token, setToken] = React.useState<any>()

    const userIsLoggedIn = useCheckStorage('userToken')

    const loginHandler = (token: any) => {
        setToken(token)
    }

    const logoutHandler = () => {
        setToken(null)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
    )
}

export default AuthContext