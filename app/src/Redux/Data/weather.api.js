import { get_weather_failure, get_weather_request, get_weather_success } from "./weather.action"
import axios from "axios";
export const weatherapi = (city)=>async(dispatch)=>{
    try{
    dispatch(get_weather_request())
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=72944581245754b3378f024aabca2e83`
      )
      .then((res) => {
        console.log(res.data, "redux");
        dispatch(get_weather_success(res.data));
      });
}
    catch(err){
        dispatch(get_weather_failure())
        console.log(err)
    }

}
