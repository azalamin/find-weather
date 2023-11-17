import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

const WeatherCard = ({ location, temperature, humidity, windSpeed, iconURL }) => {
	return (
		<Card
			sx={{
				width: "300px",
				margin: "10px",
				bgcolor: "#0000005e",
				color: "#ffffff",
			}}
		>
			<CardContent>
				<Typography variant='h5'>{location}</Typography>
				<img
					src={iconURL}
					alt='weather icon'
					style={{
						fontSize: "30px",
					}}
				/>
				<Typography variant='subtitle1'>Temperature: {temperature}°C</Typography>
				<Typography variant='subtitle1'>Humidity: {humidity}%</Typography>
				<Typography variant='subtitle1'>Wind Speed: {windSpeed} km/h</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' color='primary'>
					More Details
				</Button>
			</CardActions>
		</Card>
	);
};

export default WeatherCard;
