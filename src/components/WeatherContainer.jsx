import { Box } from "@mui/material";
import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import SearchBar from "./SearchBar";

const WeatherContainer = () => {
	const [isWeatherAvailable, setIsWeatherAvailable] = useState(true);
	return (
		<Box>
			<Box>
				<SearchBar setIsWeatherAvailable={setIsWeatherAvailable} />
			</Box>
			<Box>
				<Box>{isWeatherAvailable && <CurrentWeather />}</Box>
			</Box>
		</Box>
	);
};

export default WeatherContainer;
