import { useState, useCallback } from 'react'

type ReqConfig = {
    url: string, 
    method?: string | undefined,
    headers?: HeadersInit | undefined,
    body?: object | null
}

type Response = {
    text: string,
    status: "success" | "error" | "info" | "warning"
}

const useHttp = () => {
    const [snackbarResponse, setSnackbarResponse] = useState<Response>()
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const openSnackbar = (requestState: string) => {
        switch (requestState) {
        case 'success':
            setSnackbarResponse({
            text: 'Form submited successfully!',
            status: 'success'
            })
        break
        case 'deleted':
            setSnackbarResponse({
            text: 'Item deleted successfully!',
            status: 'success'
            })
        break
        case 'fail':
            setSnackbarResponse({
            text: 'Something went wrong!',
            status: 'error'
        })
        break
        case 'warning':
            setSnackbarResponse({
            text: 'Form is not validated',
            status: 'warning'
        })
    }
    setIsSnackbarOpen(true)   
    }
    
    const closeSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
        return;
        }
        setIsSnackbarOpen(false);
    }

    const [fetchedData, setFetchedData] = useState<any>([])

    const sendRequest = useCallback(async (requestConfig: ReqConfig, applyData?: any) => {
        try {
            setIsLoading(true)
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            })
            if (!requestConfig.method) {
                const data = await response.json()
                applyData && applyData(data)
                setFetchedData(data)    
            }
            setIsLoading(false)
            openSnackbar('success')
        } catch (err) {
            console.log(err)
            setIsLoading(false)
            openSnackbar('fail')
        }
    }, [])

    return {
        fetchedData,
        sendRequest,
        snackbarResponse,
        isSnackbarOpen,
        closeSnackbar,
        openSnackbar,
        isLoading
    }
}

export default useHttp