import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchCurrentWeather, getFiveDayForecast } from "../utils/apiCalls";
import WeatherCard from "./WeatherCard";

const CurrentWeather = () => {
	const [weatherData, setWeatherData] = useState({});
	const [forecastData, setForecastData] = useState([]);

	useEffect(() => {
		const data = fetchCurrentWeather("Dhaka");
		data
			.then(result => {
				setWeatherData(result);
			})
			.catch(err => {
				toast.error("Result not found");
			});

		const forecastsData = getFiveDayForecast("Dhaka");
		forecastsData
			.then(result => {
				setForecastData(result);
			})
			.catch(err => {
				toast.error("Result not found");
			});
	}, []);

	return (
		<Box>
			<WeatherCard weatherData={weatherData} forecastData={forecastData} />
		</Box>
	);
};

export default CurrentWeather;
