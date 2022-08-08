import React, { useRef } from 'react'
import Rating from '@mui/material/Rating';
import Switch from '@mui/material/Switch';
import '../../Common/Style/booking-flow.css'

const NewPlaceForm = () => {
    const [value, setValue] = React.useState<number | null>(1);
    const [checked, setChecked] = React.useState(false);
    const nameRef = useRef<HTMLInputElement>(null)
    const shortRef = useRef<HTMLInputElement>(null)
    const longRef = useRef<HTMLTextAreaElement>(null)
    const typeRef = useRef<HTMLSelectElement>(null)
    const capacityRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const locationRef = useRef<HTMLInputElement>(null)
    const postalRef = useRef<HTMLInputElement>(null)
    const urlRef = useRef<HTMLInputElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };
  
    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault()
      const formData = {
        listingName: nameRef.current?.value,
        shortDescr: shortRef.current?.value,
        longDescr: longRef.current?.value,
        category: Number(value),
        type: typeRef.current?.value,
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
        <div className="booking-container">
        <h1 id="booking-container__title">Add new place</h1>
        <div className="booking-container__content">
            <form onSubmit={submitHandler} id="booking-container__content--form" action="submit">
                <input id="booking-input" placeholder='Listing name' type="text" ref={nameRef}/>
                <input id="booking-input" placeholder='Short description' type="text" ref={shortRef}/>
                <textarea rows={4} name="longDescr" id="long-descr" placeholder="Long description" ref={longRef}/>
                <div className="categorization-section">
                    <p id="categorization-section__title">Categorization</p>
                    <Rating
                        name="simple-controlled"
                        size='large'
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        max={5}
                    />
                </div>
                <select ref={typeRef} name="type" id="input-select">
                    <option value="Apartment">Apartment</option>
                    <option value="Room">Room</option>
                    <option value="Mobile home">Mobile home</option>
                </select>
                <input id="booking-input" placeholder='Capacity' type="number" ref={capacityRef}/>
                <input id="booking-input" placeholder='Price' type="number" ref={priceRef}/>
                <input id="booking-input" placeholder='Location' type="text" ref={locationRef}/>
                <input id="booking-input" placeholder='Postal code' type="text" ref={postalRef}/>
                <input id="booking-input" placeholder='Listing image URL' type="text" ref={urlRef}/>
                <div className="categorization-section">
                    <p id="categorization-section__title">Free cancellation available</p>
                    <Switch 
                        checked={checked}
                        onChange={handleChange}
                    />
                </div>
                <button id="booking-btn">Add new place</button>
            </form>
        </div>
        </div>
    )
}

export default NewPlaceForm