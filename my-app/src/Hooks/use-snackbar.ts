import { useState } from 'react'

type Response = {
    text: string,
    status: "success" | "error" | "info" | "warning"
  }

const useSnackbar = () => {
    const [response, setResponse] = useState<Response>()
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = (requestState: string) => {
        switch (requestState) {
        case 'success':
            setResponse({
            text: 'Form submited successfully!',
            status: 'success'
            })
        break
        case 'fail':
        setResponse({
            text: 'Something went wrong!',
            status: 'error'
        })
        break
        case 'warning':
        setResponse({
            text: 'Form is not validated',
            status: 'warning'
        })
    }
    setIsOpen(true)   
    }
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setIsOpen(false);
    };

    return {
        response,
        isOpen,
        handleClose,
        handleOpen
    }
}

export default useSnackbar