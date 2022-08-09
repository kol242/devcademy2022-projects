import React, { useRef } from 'react'
import '../../Common/Style/new-place.css'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import Categorization from './Inputs/Categorization'
import AccomodationType from './Inputs/AccomodationType'
import Cancellation from './Inputs/Cancellation'

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
    const [value, setValue] = React.useState<number | null>(1);
    const [checked, setChecked] = React.useState(false);
    const [type, setType] = React.useState('');
    const nameRef = useRef<HTMLInputElement>(null)
    const shortRef = useRef<HTMLInputElement>(null)
    const longRef = useRef<HTMLTextAreaElement>(null)
    const capacityRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const locationRef = useRef<HTMLInputElement>(null)
    const postalRef = useRef<HTMLInputElement>(null)
    const urlRef = useRef<HTMLInputElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleTypeChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };
    
    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault()
      const formData = {
        listingName: nameRef.current?.value,
        shortDescr: shortRef.current?.value,
        longDescr: longRef.current?.value,
        category: Number(value),
        type: type,
        capacity: Number(capacityRef.current?.value),
        price: Number(priceRef.current?.value),
        location: locationRef.current?.value,
        postal: postalRef.current?.value,
        url: urlRef.current?.value,
        cancellation: checked
      }
      console.log('Form data: ', formData)
    }

    return (
        <div className="new-place-container">
            <h1 id="new-place-container__title">Add new place</h1>
            <div className="new-place-container__content">
                <form onSubmit={submitHandler} id="new-place-container__content--form" action="submit">
                    <ThemeProvider theme={theme}>
                        <TextField 
                            id="outlined-basic" 
                            label="Listing name" 
                            variant="outlined" 
                            color="primary" 
                            inputRef={nameRef}
                        />    
                        <TextField 
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
                        <Categorization label='Categorization' handleChange={setValue}/>
                        <AccomodationType 
                            label='Accomodation type' 
                            type={type} 
                            handleTypeChange={handleTypeChange}
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Capacity"
                            variant="outlined" 
                            type='number' 
                            color="primary" 
                            inputRef={capacityRef}
                        />  
                        <TextField 
                            id="outlined-basic" 
                            label="Price" 
                            variant="outlined" 
                            type='number' 
                            color="primary" 
                            inputRef={priceRef}
                        />  
                        <TextField 
                            id="outlined-basic" 
                            label="Location" 
                            variant="outlined" 
                            color="primary" 
                            inputRef={locationRef}
                        />  
                        <TextField 
                            id="outlined-basic" 
                            label="Postal code" 
                            variant="outlined" 
                            color="primary" 
                            inputRef={postalRef}
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
    )
}

export default NewPlaceForm