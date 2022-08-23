import React, { useCallback, useEffect, useState } from 'react'
import LocationIcon from '../../../Common/Images/location-icon.svg'
import { Location } from '../../../Common/Models/Place'
import useHttp from '../../../Hooks/use-http'


const WhereInput = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
  const { fetchedData: locationData, sendRequest: fetchLocations } = useHttp()
  const [locations, setLocations] = useState<Location[]>([])

  const locationHandler = useCallback(() => {
    fetchLocations({ 
      url: 'https://devcademy.herokuapp.com/api/Location',
      headers: {},
      method: 'GET',
      body: null,
      onSuccess: null,
      onFail: null  
    }) 
    let loadedLocations = []
      for (const location in locationData) {
        loadedLocations.push({ 
          id: locationData[location].id, 
          name: locationData[location].name, 
          properties: locationData[location].properties 
        });
      }
      setLocations(loadedLocations)
  }, [fetchLocations, locationData])

  useEffect(() => {
    locationHandler();
  }, [locationHandler]);

  return (
    <div className="input-wrapper">
        <label id="input-label">Where are you going?</label>
        <img src={LocationIcon} alt="icon" id="input-icon"/>
        <select defaultValue={'DEFAULT'} required id="select-input" ref={ref}>
          <option disabled value='DEFAULT'></option>
          { locations.map(item => 
            <option key={item.id} title={item.properties} value={item.id}>{item.name}</option>  
          ) }
        </select>
    </div>
  )
})

export default WhereInput