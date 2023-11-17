import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/SearchBar.css";
import { fetchCurrentWeather } from "../utils/apiCalls";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [weatherData, setWeatherData] = useState(null);

	const handleSearch = () => {
		if (searchTerm === "") {
			toast.warn("Please enter your location");
		}
		if (searchTerm !== "") {
			fetchCurrentWeather(searchTerm);
		}
	};

	return (
		<Box
			width='100%'
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<input
				value={searchTerm}
				id='searchInput'
				placeholder='Enter your location'
				onChange={event => setSearchTerm(event.target.value)}
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
			{/* {weatherData && <WeatherCard weatherData={weatherData} />} */}
		</Box>
	);
};

export default SearchBar;
