import './App.css';
import SearchCity from './Components/SearchCity';
import TempCard from './Components/TempCard';
import { useState, useEffect } from "react";
import Chart from './Components/Chart';
import cityList from "./Data";
import { weatherapi } from "./Redux/Data/weather.api"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  const [curetWeather, setCurrentWeather] = useState({}) 
  const [load, setLoad] = useState(true)
  const [temp, setTemp] = useState();

  const dispatch = useDispatch();
  const {weather } = useSelector((state) => state.weather)
  console.log(weather,"here is you")
  const handleSearch = async (cityname) => {
    console.log(cityname)
    setLoad(true)
    dispatch(weatherapi(cityname))
    if (weather && weather.cord) {
      getAllWeatherData(weather.cord.lat, weather.cord.lon)
    }
    setCurrentWeather(weather)
    
    setLoad(false)

    console.log(weather, "weather")
  }
  useEffect(() => {
    if (weather && weather.coord) {
      getAllWeatherData(weather.coord.lat, weather.coord.lon)
    }
  }, [curetWeather])
  const getAllWeatherData = async (lat, lon) => {
    var data = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=464b8ad26080a86663b083a95e5d7e41`
    );
    const result = data;
    setTemp(result.data)
    console.log(result, "result");
    console.log(temp, "temp")
  }

  return (
    <div className="App">
      <div>
        <SearchCity data={cityList} handleSearch={handleSearch} />
        {load ? (
          <div></div>
        ) : (
          <div>
            <TempCard
              city={weather.name}
              temp={weather.main.temp}
              pressure={Math.floor((weather.main.pressure * 1) / 100)}
              humidity={weather.main.humidity}
            />
            {temp && <Chart temp={temp.hourly} />}
            <div
              style={{
                Width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ Width: "100%", border: "outset" }}
                src="https://www.suntoday.org/images/sunrise-sunset.png"
                alt="sunriseandset"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
