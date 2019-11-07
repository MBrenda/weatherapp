import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

import './styles.css';

//le paso por parametro la data que dsps voy a usar
const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;
    return (
    <div className='weatherDataCont'> 
    {/* asi invocamos las clases del css */}
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>);
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        //espero un obj de esta forma
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,

    }),
}

export default WeatherData;