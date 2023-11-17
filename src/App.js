import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherContainer from './components/WeatherContainer.jsx';
import './styles/App.css';

const App = () => {

  return (
    <div className="App">
      <WeatherContainer />
      <ToastContainer />
    </div>
  );
}

export default App;
