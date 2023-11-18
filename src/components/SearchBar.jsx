import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/SearchBar.css";
import { fetchCurrentWeather, getFiveDayForecast } from "../utils/apiCalls";
import LoadingIndicator from "./LoadingIndicator";
import WeatherCard from "./WeatherCard";

const SearchBar = ({ setIsWeatherAvailable }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleSearch = () => {
		if (searchTerm === "") {
			toast.warn("Please enter your location");
		}
		if (searchTerm !== "") {
			setIsLoading(true);
			const data = fetchCurrentWeather(searchTerm);
			data
				.then(result => {
					setWeatherData(result);
					toast.success("Result found");
					setIsWeatherAvailable(false);
					setIsLoading(false);
				})
				.catch(err => {
					toast.error("Result not found");
					setIsLoading(false);
				});
			const forecastsData = getFiveDayForecast(searchTerm);
			setIsLoading(true);
			forecastsData
				.then(result => {
					setForecastData(result);
					setIsLoading(false);
				})
				.catch(err => {
					toast.error("Forecast not found");
					setIsLoading(false);
				});
		}
	};

	return isLoading ? (
		<LoadingIndicator isLoading={isLoading} />
	) : (
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
			{weatherData && <WeatherCard forecastData={forecastData} weatherData={weatherData} />}
		</Box>
	);
};

export default SearchBar;
