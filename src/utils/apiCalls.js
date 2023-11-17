import axios from "axios";
const apiKey = '6354f4482901ce51c6b0bd6c3e6c69ab';

export const fetchCurrentWeather = async (location) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    return response.data;
};


