import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchCurrentWeather } from "../utils/apiCalls";
import WeatherCard from "./WeatherCard";

const CurrentWeather = () => {
	const [weatherData, setWeatherData] = useState({});

	useEffect(() => {
		const data = fetchCurrentWeather("Dhaka");
		data
			.then(result => {
				setWeatherData(result);
			})
			.catch(err => {
				toast.error("Result not found");
			});
	}, []);

	return (
		<Box>
			<WeatherCard weatherData={weatherData} />
		</Box>
	);
};

export default CurrentWeather;
