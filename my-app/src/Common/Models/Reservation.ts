export type Reservation = {
    id: string,
    email: string,
    accomodationId: string,
    accomodation: {
      id: string,
      capacity: number,
      title?: string;
      subtitle?: string;
      description?: string;
      type?: string;
      categorization: number;
      personCount?: number;
      imageUrl?: string;
      freeCancelation?: boolean;
      price?: number;
      locationID?: string;
      location?: {
          name: string,
          imageUrl: string,
          postalCode: number,
          properties: number
      }
      postalCode?: number;
    },
    checkIn: string,
    checkOut: string,
    personCount: number,
    confirmed: boolean,
  }