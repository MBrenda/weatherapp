import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import WeatherTemperature from './WeatherData/WeatherTemperature';
import { SUN } from '../../constants/weathers';
import './styles.css';

const location = "Mendoza,AR";
const api_key = "634224dde74567613b4a97da6d758014";
const api_weather = `api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api_key}`;

const data1= {
    temperature: 20,
    weatherState: SUN,
    humidity: 20,
    wind: '10 m/s',
};

/* const data2= {
    temperature: 10,
    weatherState: CLOUD,
    humidity: 0,
    wind: '20 m/s',
}; */

//functional component
/* const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city = {'Mendoza!'}/>
        <WeatherData data={data}/>
    </div>
); */

//class component tiene otros atributos para manejar
class WeatherLocation extends Component {

    //cuando se construye este componente voy a usar este state (el functional compo no lo tiene)
    constructor() {
        super();
        this.state = {
            city: 'Mendoza',
            data: data1
            }; 
    }
    
    handleUpdateClick = () => {
        //recibe la url de donde busco la info
        fetch(api_weather);
        /* this.setState ({
            city: 'Mendoza',
            data: data2
        }); */
        console.log("actualizado");
    }

    render = () => {
        const { city, data } = this.state;
        return ( 
            <div className="weatherLocationCont">
                <Location city = {city} />
                <WeatherData data= {data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>);
    };
};  
    export default WeatherLocation;

    //CON EL CONSTRUCTOR SE PONE EL ESTADO INICIAL STATE, SE RENDERIZA CON ESE ESTADO
    //SE EJECUTA EL CLICK TOMA EL SETSTATE Y SE RENDERIZA DE NUEVO CON LOS NUEVOS DATOS