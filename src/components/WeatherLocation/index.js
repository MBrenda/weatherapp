import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import WeatherTemperature from './WeatherData/WeatherTemperature';
import './styles.css';

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city = {'Mendoza!'}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;

