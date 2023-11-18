import { Backdrop, Box, CircularProgress } from "@mui/material";
import React from "react";

const LoadingIndicator = isLoading => {
	return (
		<Box display='flex' justifyContent='center' alignItems='center'>
			<Backdrop sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</Box>
	);
};

export default LoadingIndicator;
