import { Accomodation } from '../Common/Models/Accomodation'

const useFilter = () => {
    // function for getting difference between reserved and available accomodations (filtered by its id's)
  function getDifference(accomodation: any, reservation: any) {
    return accomodation.filter((object1: any) => {
      return !reservation.some((object2: any) => {
        return object1.id === object2.accomodation.id
      })
    })
  }

  function filter(
    checkInDate: any, 
    formData: any, 
    accomodations: any, 
    reservations: any, 
    isFavorites: boolean,
    locationID: string | undefined)
    {
    // parsing dateIn argument
    const dateIn = new Date(checkInDate).getTime()

    const locations: any = []

    // difference between available accomodations and reserved accomodation (returned value are all available accomodations)
    const filteredAcc = accomodations.filter((el: any) => el.locationID === formData.locationID)
    const filteredReservation = reservations.filter((el: any) => el.accomodation.locationID === formData.locationID)
    const difference = isFavorites ? getDifference(accomodations, reservations) : getDifference(filteredAcc, filteredReservation)
    let bookings: Accomodation[] = difference.map((el: any) => {
    return el
    })
    
    // filtering all reserved accomodations by selected location
    isFavorites ? reservations.map((el: any) => { return locations.push(el) }) : 
    reservations.map((el: any) => {
      if (locationID || formData.locationID === el.accomodation.locationID) {
        return locations.push(el)
      } else {
        return bookings = filteredAcc
      }
    })

    // comparing filtered accomodations by selected check in date with check out date (returned value are available accomodations
    // after selected check in date)
    locations.map((el: any) => {
    el.checkOut = new Date(el.checkOut).getTime()
        if (dateIn >= el.checkOut) {
        return bookings.push(el.accomodation)
        } else {
        return bookings 
        }  
    })

    // filtering accomodations by written people count and accomodation type (returned value are matched accomodations by
    // written comparators)
    if (formData.peopleCount > 0 || formData.accomodationType === !undefined) {
    const filteredData = bookings.filter(el => el.capacity >= formData.peopleCount || el.type === formData.accomodationType)
    return filteredData
    } 
    // finally, returning filtered reserved accomodations by all previous comparators with firstly initialized 
    // difference beetwen available and reserved accomodations
    return bookings
  }

  return {
    filter
  }
}

export default useFilter