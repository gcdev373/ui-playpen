/**
 * I tend to put the types in a types.ts file colocated with the REST API that uses them.
 */
export type WeatherItem = {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export type WeatherReponse = {
  coord: {
    lat: number,
    lon: number
  },
  weather: WeatherItem[]
}