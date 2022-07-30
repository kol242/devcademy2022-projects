import React from 'react'

type Place = {
  title: string,
  location: string,
  subtitle: string,
  imageUrl: any
}[]

const PlaceView: React.FC<{ places: Place }> = (props) => {
  return (
    <div className="place-container">
        { props.places.map(place => (
            <div className="place-container__card">
            <img src={place.imageUrl} alt="PlaceImg" />
            <h1 id="place-container__card--title">{place.title}</h1>
            <h3 id="place-container__card--subtitle">{place.location}</h3>
            <h2 id="place-container__card--detail">{place.subtitle}</h2>
            <div className="place-container__card--btns">
                <button id="btns-edit">EDIT</button>
                <button id="btns-delete">DELETE PLACE</button>
            </div>
            </div>   
        )) }
    </div>
  )
}

export default PlaceView