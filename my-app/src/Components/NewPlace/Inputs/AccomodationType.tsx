import React from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AccomodationType: React.FC<{ handleTypeChange: any, type: string, label: string }> = (props) => {
  return (
    <FormControl>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.type}
            label={props.label}
            onChange={props.handleTypeChange}
        >
            <MenuItem value='Apartment'>Apartment</MenuItem>
            <MenuItem value='Room'>Room</MenuItem>
            <MenuItem value='Mobile home'>Mobile home</MenuItem>
        </Select>    
    </FormControl>
  )
}

export default AccomodationType