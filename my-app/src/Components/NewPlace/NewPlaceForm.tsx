import React, { useRef } from 'react'
import '../../Common/Style/new-place.css'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SelectChangeEvent } from '@mui/material/Select';
import Categorization from './Inputs/Categorization'
import AccomodationType from './Inputs/AccomodationType'
import Cancellation from './Inputs/Cancellation'
import LocationSelect from './Inputs/LocationSelect'

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
      enterTaskHandler(formData)
    }

    const enterTaskHandler = async (formData: {}) => {
        try {
          const response = await fetch(
            'https://devcademy.herokuapp.com/api/Accomodations',
            {
              method: 'POST',
              body: JSON.stringify(formData),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
          console.log(data)
    
        } catch (err) {
            console.error(err);
        }
      };

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
                    <p id="info-success">New place added!</p>
                    <p id="info-fail">Something went wrong...</p>
                    <button id="add-btn">Add new place</button>
                </form>
            </div>
        </div>
    )
}

export default NewPlaceForm