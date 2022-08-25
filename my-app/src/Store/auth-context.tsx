import React from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token: any) => {},
    logout: () => {}
})

export const AuthContextProvider = (props: any) => {
    const [token, setToken] = React.useState<any>()
    const checkStorage = (key: any) => {
        const storedData: any = localStorage.getItem(key)
        if (storedData === null) {
          return false
        } else {
          const parsedData = JSON.parse(storedData)
          return parsedData.loggedIn  
        }
    }
    const userIsLoggedIn = checkStorage('userToken')

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