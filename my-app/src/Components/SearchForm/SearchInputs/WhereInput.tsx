import React, { useEffect } from 'react'
import LocationIcon from '../../../Common/Images/location-icon.svg'
import useHttp from '../../../Hooks/use-http'


const WhereInput = React.forwardRef((props, ref: React.Ref<HTMLSelectElement>) => {
  const { fetchedData: locationData, sendRequest: fetchLocations } = useHttp()

  useEffect(() => {
    fetchLocations({ 
      url: 'https://devcademy.herokuapp.com/api/Location'
    }) 
  }, [fetchLocations])

  return (
    <div className="input-wrapper">
        <label id="input-label">Where are you going?</label>
        <img src={LocationIcon} alt="icon" id="input-icon"/>
        <select defaultValue={'DEFAULT'} required id="select-input" ref={ref}>
          <option disabled value='DEFAULT'></option>
          { locationData.map((item: any) => 
            <option key={item.id} title={item.properties} value={item.id}>{item.name}</option>  
          ) }
        </select>
    </div>
  )
})

export default WhereInput