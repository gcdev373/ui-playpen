
/**
 * This module provides a 'service API' to other parts of the app.
 * It uses the REST API, and defines the various state items that are required to store the response.
 * It effectively glues the REST API response to a React State Hook.
 */
import * as React from 'react';

import useWeatherRestApi from './useWeatherRestApi';
import { WeatherReponse } from './types';

/**
 * In this case, the weather will always contain the last returned weather,
 * the getWeather function gives the owning component a way to request the weather for a new city.
 * Notice that the getWeather function here returns VOID instead of a promise.
 */
interface WeatherRestApi {
  weather?: WeatherReponse;
  getWeather: (city: string) => void;
}

const useWeather = (): WeatherRestApi => {
  const { getWeather } = useWeatherRestApi();
  const [weather, setWeather] = React.useState<WeatherReponse | undefined>(undefined);

  return {
    weather,
    getWeather: React.useCallback((city: string) =>
      getWeather(city).then(setWeather)
      , [getWeather])
  }
}

export default useWeather;