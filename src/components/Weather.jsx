import sea from '../assets/search.png'
import wd from '../assets/wind.png'
import snow from '../assets/snow.png'
import rain from '../assets/rain.png'
import hum from '../assets/humidity.png'
import drizzle from '../assets/drizzle.png'
import cloud from '../assets/cloud.png'
import classes from './weather.module.css'
import { useState } from 'react';


const Weather = () => {
  const [city, setCity] = useState('');
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0)
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState('');

  let api = 'e980b9cd103f9fcca2637b5fe03da549';

  const changeHandler = e => {
    setCity(e.target.value)
  }

  const search = async () => {
    if (city === '') {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api}`
    let response = await fetch(url);
    let data = await response.json();
    setHumidity(`${data.main.humidity}%`);
    setWind(`${data.wind.speed}Km\\h`);
    setTemp(`${data.main.temp}°C`)
    setCity(data.name)

    if (data.weather[0].icon === '01n' || data.weather[0].icon === '01d') {
      setIcon(cloud)
    }
    else if (data.weather[0].icon === '02n' || data.weather[0].icon === '02d') {
      setIcon(cloud)
    }
    else if (data.weather[0].icon === '03n' || data.weather[0].icon === '03d') {
      setIcon(cloud)
    }
    else if (data.weather[0].icon === '04n' || data.weather[0].icon === '04d') {
      setIcon(cloud)
    }
    else if (data.weather[0].icon === '09n' || data.weather[0].icon === '09d') {
      setIcon(drizzle)
    }
    else if (data.weather[0].icon === '10n' || data.weather[0].icon === '10d') {
      setIcon(rain)
    }
    else if (data.weather[0].icon === '11n' || data.weather[0].icon === '11d') {
      setIcon(rain)
    }
    else if (data.weather[0].icon === '13n' || data.weather[0].icon === '13d') {
      setIcon(snow)
    }

    
};
  return (
    <div className={classes.box}> 
      
      <div className={classes.container}>
        <input type="text" value={city} onChange={changeHandler} placeholder='Search for city'></input>
        <img src={sea} alt='search' onClick={() => search()}/>
      </div>
      <div className={classes.weather}>
        <img src={icon} alt='image of weather' />
      </div>
        <div className={classes.temp}>
          {temp}
        </div>
        <div className={classes.loc}>
          {city}
      </div>
      <div className={classes.element}>
        <img src={hum} alt='humidity'></img>
        <div className={classes.data}>
          <div className={classes.hum}>{humidity}</div>
          <div className={classes.text}>Humidity</div>  
        </div>
        <img src={wd} alt='wind'></img>
        <div className={classes.data}>
          <div className={classes.wind}>{wind}</div>
          <div className={classes.text}>Wind</div>
        </div>
      </div>
      

    </div>
  )
}

export default Weather;