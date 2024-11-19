export type Destination = {
  id: string;
  name: string;
  country: string;
  place: string;
  image: string;
  description: string;
  coordinates?: [number, number]; // Optional field for longitude, latitude
};
