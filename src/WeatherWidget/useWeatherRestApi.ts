/**
 * This module encapsulates the REST API itself (and nothing else)
 * 
 * It provides methods that call the remote REST API and return a promise of the response.
 * 
 * If there is a some single common error handling stuff, that could go in here,
 * if there is common header setting stuff that may also go here,
 * or you may even have a custom wrapper around fetch (Stroom UI does this)
 * 
 */
import * as React from 'react';
import { WeatherReponse } from './types';

const apiKey: string = '0710de197b2291b22a05cbb23b5bbb06';

interface WeatherRestApi {
  getWeather: (city: string) => Promise<WeatherReponse>;
}

const useWeatherRestApi = (): WeatherRestApi => {
  return {
    getWeather: React.useCallback((city: string) =>
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then(r => r.json())
      , [apiKey])
  }
}

export default useWeatherRestApi;