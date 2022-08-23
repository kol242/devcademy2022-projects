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
    const { sendRequest: addAccomodation } = useHttp()
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
                text: 'Accomodation added successfully!',
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
        categoryValidation(formData.categorization)
        if ( !titleError && !capacityError && !subtitleError && !categoryError ) {
            addAccomodation({ 
                url: 'https://devcademy.herokuapp.com/api/Accomodations',
                headers: {'Content-Type': 'application/json'},
                method: 'POST',
                body: formData,
                onSuccess: handleSnackbar('success'),
                onFail: handleSnackbar('fail')
            })
            const form = document.getElementById('new-place-container__content--form') as HTMLFormElement;
            setLocation('')
            setType('')
            form.reset()
        } else {
            handleSnackbar('warning')
        }
    }

    // ============================================== VALIDATIONS ==========================================================

    const [titleError, setTitleError] = React.useState(false);
    const [titleValid, setIsTitleValid] = React.useState('');

    function titleValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (event.target.value.length > 100) {
            setTitleError(true)
            setIsTitleValid('Maximum 100 characters!')
        } else {
            setIsTitleValid('')
            setTitleError(false)
        }
    }

    const [subtitleError, setSubitleError] = React.useState(false);
    const [subtitleValid, setIsSubitleValid] = React.useState('');

    function subtitleValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (event.target.value.length > 200) {
            setSubitleError(true)
            setIsSubitleValid('Maximum 200 characters!')
        } else {
            setIsSubitleValid('')
            setSubitleError(false)
        }
    }

    const [capacityError, setCapacityError] = React.useState(false);
    const [capacityValid, setIsCapacityValid] = React.useState('');

    function capacityValidation(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const number = Number(event.target.value)
        if (number < 1) {
            setCapacityError(true)
            setIsCapacityValid('Minimum capacity is 1!')
        } else {
            setIsCapacityValid('')
            setCapacityError(false)
        }
    }

    const [categoryError, setCategoryError] = React.useState(false);

    function categoryValidation(value: number) {
        if (value < 1) {
            setCategoryError(true)
        } else {
            setCategoryError(false)
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