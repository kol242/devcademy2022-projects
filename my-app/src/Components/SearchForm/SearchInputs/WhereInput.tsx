import React, { useEffect, useState } from 'react'
import LocationIcon from '../../../Common/Images/location-icon.svg'
import { Location } from '../../../Common/Models/Place'


const WhereInput = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
 
  const [locations, setLocations] = useState<Location[]>([])

  const fetchLocations = async () => {
    try {
      const response = await fetch(
        'https://devcademy.herokuapp.com/api/Location'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      const loadedLocations = [];

      for (const location in data) {
        loadedLocations.push({ 
          id: data[location].id, 
          name: data[location].name, 
          properties: data[location].properties 
        });
      }
      setLocations(loadedLocations)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

   

  return (
    <div className="input-wrapper">
        <label id="input-label">Where are you going?</label>
        <img src={LocationIcon} alt="icon" id="input-icon"/>
        <select required id="select-input" ref={ref}>
          <option disabled selected></option>
          { locations.map(item => 
            <option key={item.id} title={item.properties} value={item.id}>{item.name}</option>  
          ) }
        </select>
    </div>
  )
})

export default WhereInput