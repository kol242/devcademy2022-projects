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
import useHttp from '../../Hooks/use-http'
import useValidators from '../../Hooks/use-validators'

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

const NewPlaceForm = () => {
    const { sendRequest: addAccomodation, snackbarResponse, isSnackbarOpen, closeSnackbar, openSnackbar } = useHttp()
    const 
    { 
        categoryError,
        categoryValidation,
        subtitleError,
        subtitleValid,
        subtitleValidation,
        titleError,
        titleValid,
        titleValidation,
        capacityError,
        capacityValid,
        capacityValidation 
    } = useValidators()

    const [value, setValue] = React.useState<number | null>(0);
    const [checked, setChecked] = React.useState(true);
    const [type, setType] = React.useState('');
    const [location, setLocation] = React.useState<any>();

    const nameRef = useRef<HTMLInputElement>(null)
    const shortRef = useRef<HTMLInputElement>(null)
    const longRef = useRef<HTMLTextAreaElement>(null)
    const capacityRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const urlRef = useRef<HTMLInputElement>(null)

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
        categoryValidation(formData.categorization)
        if ( !titleError && !capacityError && !subtitleError && !categoryError ) {
            addAccomodation({ 
                url: 'https://devcademy.herokuapp.com/api/Accomodations',
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: formData
            })
            const form = document.getElementById('new-place-container__content--form') as HTMLFormElement;
            setLocation('')
            setType('')
            form.reset()
        } else {
            openSnackbar('warning')
        }
    }

    return (
        <>
            <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={closeSnackbar} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                <Alert onClose={closeSnackbar} severity={snackbarResponse?.status} sx={{ width: '100%' }}>
                {snackbarResponse?.text}
                </Alert>
            </Snackbar>
            <div className="new-place-container">
                <h1 id="new-place-container__title">Add new place</h1>
                <div className="new-place-container__content">
                    <form onSubmit={submitHandler} id="new-place-container__content--form" action="submit">
                        <ThemeProvider theme={theme}>
                            <TextField 
                                required
                                error={titleError}
                                id="outlined-basic" 
                                label="Listing name" 
                                variant="outlined" 
                                color="primary" 
                                inputRef={nameRef}
                                onChange={(event) => titleValidation(event)}
                                helperText={titleValid}
                            />    
                            <TextField 
                                error={subtitleError}
                                helperText={subtitleValid}
                                onChange={(event) => subtitleValidation(event)}
                                id="outlined-basic" 
                                label="Short description" 
                                variant="outlined" 
                                color="primary" 
                                inputRef={shortRef}
                            />    
                            <TextField 
                                id="outlined-basic" 
                                multiline 
                                rows={5} 
                                label="Long description" 
                                variant="outlined" 
                                color="primary" 
                                inputRef={longRef}
                            /> 
                            <div>
                                <Categorization label='Categorization' handleChange={setValue}/>
                                { categoryError && <p style={{color: 'red', margin: 0, fontSize: '14px'}}>Categorization is required!</p>}    
                            </div> 
                            <AccomodationType 
                                label='Accomodation type' 
                                type={type} 
                                handleTypeChange={handleTypeChange}
                            />
                            <TextField
                                error={capacityError}
                                helperText={capacityValid}
                                onChange={(event) => capacityValidation(event)}
                                id="outlined-basic" 
                                label="Capacity"
                                variant="outlined" 
                                type='number' 
                                color="primary" 
                                inputRef={capacityRef}
                            />  
                            <TextField 
                                required
                                id="outlined-basic" 
                                label="Price" 
                                variant="outlined" 
                                type='number' 
                                color="primary" 
                                inputRef={priceRef}
                            />  
                            <LocationSelect 
                                handleLocationChange={handleLocationChange}
                                label='Location'
                                location={location}
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="Listing image URL" 
                                variant="outlined" 
                                color="primary" 
                                inputRef={urlRef}
                            />
                            <Cancellation 
                                label='Free cancellation available' 
                                handleChange={handleChange} 
                                checked={checked} 
                            />
                        </ThemeProvider>
                        <button id="add-btn">Add new place</button>
                    </form>
                </div>
            </div>
        </>
        
    )
}

export default NewPlaceForm