import * as  React from 'react';

import { FunctionComponent, useState, ChangeEventHandler } from "react";
import useWeather from './useWeather';

const WeatherWidget: FunctionComponent = () => {

  const { weather, getWeather } = useWeather();

  const [city, setCity] = useState<string>('portland');

  const onCityChange: ChangeEventHandler<HTMLInputElement> = React.useCallback(({ target: { value } }) => setCity(value), [setCity])

  const onClickFetch: React.MouseEventHandler<HTMLButtonElement> = React.useCallback((e) => {
    getWeather(city);
    e.preventDefault(); // prevent form submission
  }, [city, getWeather])

  return (<div>
    <form>
      <label>City</label>
      <input value={city} onChange={onCityChange} />
      <button onClick={onClickFetch}>Fetch</button>
    </form>
    {weather ? (<div>
      <fieldset>
        <label>Latitude</label>
        <div>{weather.coord.lat}</div>
        <label>Longitude</label>
        <div>{weather.coord.lon}</div>
      </fieldset>
      <table>
        <thead>
          <tr><th>ID</th><th>Main</th><th>Description</th></tr>
        </thead>
        <tbody>
          {weather.weather.map(w => (<tr>
            <td>{w.id}</td>
            <td>{w.main}</td>
            <td>{w.description}</td>
          </tr>))}
        </tbody>
      </table>
    </div>) : (<p>No Weather Fetched Yet</p>)}
  </div>)
}

export default WeatherWidget;