import React from 'react';

const Weather = props => (
  <div>
    {props.result && <p>Location: {props.city}, {props.country}</p>}
    {props.result && <p>Temp: {props.temp}</p>}
    {props.result && <p>Humidity: {props.humidity}</p>}
    {props.result && <p>Conditions: {props.desc}</p>}
    {!props.result && props.error && <p>Error: {props.error}</p>}
  </div>
)

export default Weather;