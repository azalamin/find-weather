import { Box } from "@mui/material";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherContainer from './components/WeatherContainer.jsx';
import './styles/App.css';

const App = () => {

  return (
    <Box className="App" sx={{
      display: {
        md: 'flex'
      },
      justifyContent: 'center'
    }}>
      <WeatherContainer />
      <ToastContainer />
    </Box>
  );
}

export default App;
