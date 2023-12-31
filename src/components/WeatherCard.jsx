import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import ForecastChart from "./ForecastChart";

const WeatherCard = ({ weatherData, forecastData }) => {
	const { name, main, wind } = weatherData;
	return (
		<Box
			display={{
				md: "flex",
			}}
		>
			<Card
				sx={{
					width: {
						md: "300px",
					},
					bgcolor: "#0000005e",
					color: "#ffffff",
					minHeight: {
						sm: "50vh",
						xs: "30vh",
					},
					marginTop: "3rem",
					paddingX: "1.5rem",
					paddingTop: "1.5rem",
				}}
			>
				<CardContent>
					<Typography variant='h4'>{name}</Typography>
					<Typography variant='subtitle1'>Temperature: {main?.temp}°C</Typography>
					<Typography variant='subtitle1'>Humidity: {main?.humidity}%</Typography>
					<Typography variant='subtitle1'>Wind Speed: {wind?.speed} km/h</Typography>
					<Typography variant='subtitle1'>Pressure: {main?.pressure}</Typography>
					<Typography variant='subtitle1'>Max Temp: {main?.temp_max} °C</Typography>
					<Typography variant='subtitle1'>Min Temp: {main?.temp_min} °C</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' color='primary'>
						More Details
					</Button>
				</CardActions>
			</Card>
			<Box
				sx={{
					marginTop: "3rem",
					marginBottom: {
						md: "0rem",
						xs: "2rem",
					},
					marginLeft: {
						md: "3rem",
					},
					marginX: {
						xs: "0.5rem",
					},
				}}
			>
				<ForecastChart forecastData={forecastData} />
			</Box>
		</Box>
	);
};

export default WeatherCard;
