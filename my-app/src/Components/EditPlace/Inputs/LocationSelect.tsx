import React, { useEffect, useState } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Place } from '../../../Common/Models/Place'

const LocationSelect: React.FC<{ handleLocationChange: any, location: object, label: string, default: any }> = (props) => {
   
  const [locations, setLocations] = useState<Place[]>([])
  const fetchLocations = async () => {
    try {
      const response = await fetch(
        'https://devcademy.herokuapp.com/api/Location'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      setLocations(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);
  
  return (
    <FormControl>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.location}
          label={props.label}
          onChange={props.handleLocationChange}
          defaultValue={props.default}
        >
          { locations.map(item => <MenuItem key={item.id} value={item} >{item.name}</MenuItem>)}
        </Select>    
    </FormControl>
  )
}

export default LocationSelect