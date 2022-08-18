import React, { useRef } from 'react'
import '../../Common/Style/new-place.css'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import Categorization from './Inputs/Categorization'
import AccomodationType from './Inputs/AccomodationType'
import Cancellation from './Inputs/Cancellation'
import LocationSelect from './Inputs/LocationSelect'
import Alert from '../Alert'
import Snackbar from '@mui/material/Snackbar';
import { useLocation } from 'react-router-dom'

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

const EditPlaceForm = () => {
    const { state }: any = useLocation()

    const [value, setValue] = React.useState<number | null>(state.categorization);
    const [checked, setChecked] = React.useState(state.freeCancelation);
    const [type, setType] = React.useState(state.type);
    const [location, setLocation] = React.useState<any>(state.location);

    const nameRef = useRef<HTMLInputElement>(null)
    const shortRef = useRef<HTMLInputElement>(null)
    const longRef = useRef<HTMLTextAreaElement>(null)
    const capacityRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const urlRef = useRef<HTMLInputElement>(null)

    type Response = {
        text: string,
        status: "success" | "error" | "info" | "warning"
      }
      const [response, setResponse] = React.useState<Response>();
      const [open, setOpen] = React.useState(false);
    
      const handleSnackbar = (requestState: string) => {
        switch (requestState) {
          case 'success':
             setResponse({
              text: 'Accomodation updated successfully!',
              status: 'success'
             })
            break
          case 'error':
            setResponse({
              text: 'Something went wrong!',
              status: 'error'
            })
        }
        setOpen(true)
      };
    
      const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    const handleLocationChange = (event: SelectChangeEvent) => {
        setLocation(event.target.value);
    };
    
    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault()
      const formData = {
        title: nameRef.current?.value,
        subtitle: 'test',
        shortDescription: shortRef.current?.value,
        description: longRef.current?.value,
        categorization: Number(value),
        type: type,
        capacity: Number(capacityRef.current?.value),
        price: Number(priceRef.current?.value),
        locationID: location?.id,
        location: {
            name: location?.name,
            postalCode: Number(location?.postalCode),
            imageUrl: location?.imageUrl,
            properties: Number(location?.properties)
        },
        freeCancellation: checked,
        personCount: 0,
        imageUrl: urlRef.current?.value
      }
      console.log(formData)
      editAccomodationHandler(formData)
    }

    const editAccomodationHandler = async (formData: {}) => {
        try {
            const response = await fetch(
                `https://devcademy.herokuapp.com/api/Accomodations/${state.id}`,
                {
                method: 'PUT',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
                }
            );
        
            if (!response.ok) {
                handleSnackbar('error')
                throw new Error('Request failed!')
            }
            handleSnackbar('success')
        } catch (err) {
            console.error(err)
            handleSnackbar('error')
        }
      }

    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                <Alert onClose={handleClose} severity={response?.status} sx={{ width: '100%' }}>
                    {response?.text}
                </Alert>
            </Snackbar>
            <div className="new-place-container">
                <h1 id="new-place-container__title">Edit place</h1>
                <div className="new-place-container__content">
                    <form onSubmit={submitHandler} id="new-place-container__content--form" action="submit">
                        <ThemeProvider theme={theme}>
                            <TextField 
                                id="outlined-basic" 
                                label="Listing name" 
                                variant="outlined" 
                                color="primary"
                                inputRef={nameRef}
                                defaultValue={state.title}
                            />    
                            <TextField 
                                id="outlined-basic" 
                                label="Short description" 
                                variant="outlined" 
                                color="primary" 
                                inputRef={shortRef}
                                defaultValue={state.shortDescription}
                            />    
                            <TextField 
                                id="outlined-basic" 
                                multiline 
                                rows={5} 
                                label="Long description" 
                                variant="outlined" 
                                color="primary" 
                                inputRef={longRef}
                                defaultValue={state.description}
                            />  
                            <Categorization default={state.categorization} label='Categorization' handleChange={setValue}/>
                            <AccomodationType 
                                label='Accomodation type' 
                                type={type} 
                                default={state.type}
                                handleTypeChange={handleTypeChange}
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Capacity"
                                variant="outlined" 
                                type='number' 
                                color="primary" 
                                inputRef={capacityRef}
                                defaultValue={state.personCount}
                            />  
                            <TextField 
                                id="outlined-basic" 
                                label="Price" 
                                variant="outlined" 
                                type='number' 
                                color="primary" 
                                inputRef={priceRef}
                                defaultValue={state.price}
                            />  
                            <LocationSelect 
                                handleLocationChange={handleLocationChange}
                                label='Location'
                                location={location}
                                default={state.location.name}
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Listing image URL" 
                                variant="outlined" 
                                color="primary" 
                                inputRef={urlRef}
                                defaultValue={state.imageUrl}
                            />
                            <Cancellation 
                                label='Free cancellation available' 
                                handleChange={handleChange} 
                                checked={checked} 
                            />
                        </ThemeProvider>
                        <button id="add-btn">Save changes</button>
                    </form>
                </div>
            </div>
        </>
        
    )
}

export default EditPlaceForm