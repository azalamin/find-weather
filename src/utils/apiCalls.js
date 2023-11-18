import axios from "axios";
export const apiKey = '6354f4482901ce51c6b0bd6c3e6c69ab';

export const fetchCurrentWeather = async (location) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    return response.data;
};


export const getFiveDayForecast = async (location) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`
    );
    // Extract the daily forecast data (every 8th entry in the list)
    const fiveDayForecast = response.data.list.filter((reading, index) => index % 8 === 0);
    return fiveDayForecast
};

