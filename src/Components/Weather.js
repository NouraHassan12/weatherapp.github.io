import React, { Component } from 'react';
import '../Stylesheets/WeatherCSS.css';
import Weatherform from '../Components/Weatherform';
import  Weathercard from '../Components/Weathercard';
 const apikey= "ef8c8a8a61f66af003ed6abd8f5a810d"

export default class Weather extends Component {

    state={
        temprature:'',
        temp_max:'',
        temp_min:'',
        city:'',
        humidity:'',
        description:'',
        error:''
        

    }
    getWeather = async (e) =>{
       e.preventDefault()
       const city = e.target.elements.city.value;
       const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
       const data = await api.json()
        console.log(data);
        if(city){
            this.setState({
                temprature:data.main.temp,
                temp_max:data.main.temp_max,
                temp_min:data.main.temp_min,
                city:data.name,
                humidity:data.main.humidity,
                description:data.weather[0].description,
                error:''
            })
        }
        else{
            this.setState({
        temprature:'',
        temp_max:'',
        temp_min:'',
        city:'',
        humidity:'',
        description:'',
        error:'PLEASE ENTER DATA'
            })
        }
    }
  render() {
    return (
      <div className="weather">
        <div className="content">
            <h3>Just The City Name</h3>
            <p>You Must spelling correctly</p>
      <Weatherform getWeather={this.getWeather}  />
      <Weathercard
      temprature={this.state.temprature}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      city={this.state.city}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error} />
      </div>
      </div>
    );
  }
}
