import { Box } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

const WeatherContainer = () => {
	return (
		<Box
			sx={{
				padding: "2rem",
			}}
		>
			<SearchBar />
		</Box>
	);
};

export default WeatherContainer;
