import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/SearchBar.css";
import { fetchCurrentWeather, getFiveDayForecast } from "../utils/apiCalls";
import WeatherCard from "./WeatherCard";

const SearchBar = ({ setIsWeatherAvailable }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState({});

	const handleSearch = () => {
		if (searchTerm === "") {
			toast.warn("Please enter your location");
		}
		if (searchTerm !== "") {
			const data = fetchCurrentWeather(searchTerm);
			data
				.then(result => {
					setWeatherData(result);
					toast.success("Result found");
					setIsWeatherAvailable(false);
				})
				.catch(err => {
					toast.error("Result not found");
				});
			const forecastsData = getFiveDayForecast(searchTerm);
			forecastsData
				.then(result => {
					setForecastData(result);
				})
				.catch(err => {
					toast.error("Forecast not found");
				});
		}
	};

	console.log(forecastData);

	return (
		<Box>
			<Box
				width='100%'
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
				paddingTop='3rem'
			>
				<input
					value={searchTerm}
					id='searchInput'
					placeholder='Enter your location'
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<Button
					sx={{
						borderRadius: "10px",
					}}
					variant='contained'
					color='primary'
					onClick={handleSearch}
				>
					<SearchIcon
						sx={{
							fontSize: "30px",
						}}
					/>
				</Button>
			</Box>
			{weatherData && <WeatherCard weatherData={weatherData} />}
		</Box>
	);
};

export default SearchBar;
