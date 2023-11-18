import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React from "react";
import "../styles/SearchBar.css";

const ForecastChart = ({ forecastData }) => {
	return (
		<div>
			<Typography
				color='white'
				variant='h4'
				fontWeight='900'
				textAlign='center'
				marginBottom='1.2rem'
			>
				Forecasts For Next 5 Days
			</Typography>
			<TableContainer
				sx={{
					bgcolor: "#00000073",
				}}
				component={Paper}
			>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell className='tb-color'>Date</TableCell>
							<TableCell className='tb-color' align='right'>
								Temperature
							</TableCell>
							<TableCell className='tb-color' align='right'>
								Wind
							</TableCell>
							<TableCell className='tb-color' align='right'>
								Visibility
							</TableCell>
							<TableCell className='tb-color' align='right'>
								Humidity
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{forecastData.map((forecast, index) => (
							<TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell className='tb-color' component='th' scope='row'>
									{forecast?.dt_txt}
								</TableCell>
								<TableCell className='tb-color' align='right'>
									{forecast?.main?.temp} °C
								</TableCell>
								<TableCell className='tb-color' align='right'>
									{forecast?.wind?.speed} km/h
								</TableCell>
								<TableCell className='tb-color' align='right'>
									{forecast?.visibility}
								</TableCell>
								<TableCell className='tb-color' align='right'>
									{forecast?.main?.humidity}%
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default ForecastChart;
