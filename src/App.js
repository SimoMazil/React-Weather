import React, { Component } from 'react';

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "cf7b8f995d814a35a8e3e5edb7a11def"

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    humidity: undefined,
    temp: undefined,
    desc: undefined,
    result: false,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json()
    
    if(data.cod == 200) {
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        result: true,
        error: undefined
      })
    } else {
      this.setState({
        result: false,
        error: data.message
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          result = {this.state.result}
          city = {this.state.city}
          country = {this.state.country}
          temp = {this.state.temp}
          humidity = {this.state.humidity}
          desc = {this.state.desc}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
