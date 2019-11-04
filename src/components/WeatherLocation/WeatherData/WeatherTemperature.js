import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, 
    SUN,
    RAIN,
    SNOW } from '../../../constants/weathers';
import './styles.css';

//funcion
const stateIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        default:
            return "day-sunny";
    }
};

const getWeatherIcon = weatherState =>{
    return (< WeatherIcons className='wicon' name={stateIconName(weatherState)} size="4x" />)
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className = 'weatherTemperatureConst'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{` ${temperature}`} </span>
        <span className='temperaturetype'>°C</span>
    </div>
);

//aca le digo que si ingreso una temperatura tiene que ser un n° y lo otro una string, VALIDO
//PROPTYPES ES PARA VERIFICACION DE TIPOS
WeatherTemperature.propTypes = {
    temperature:  PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;