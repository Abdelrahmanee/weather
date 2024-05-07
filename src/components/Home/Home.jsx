import React, { useEffect, useState } from 'react'
import './styles.css'; // Import CSS file for styles

import { WeatherCard } from '../WeatherCard/WeatherCard'
import axios from 'axios';
import ForecastTable from '../ForcastTable/ForcastTable';

export default function Home() {

    const [isVisible, setIsVisible] = useState(false);


    let [weatherData, setWeatherData] = useState([])
    const [location, setLocation] = useState('cairo'); // Default location

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=2a452b3aace048fb9a9133707240505&q=${location}&days=3`);
            setLocation(location)
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Toggle the visibility state
    };


    // console.log(weatherData);
    useEffect(() => {
        fetchData(location)
    }, [location])

    const handleLocationChange = (e) => {
        setLocation(e.target.value)
        fetchData(e.target.value);
        
    };
    return (
        <>
            <div className="app-container">
                <div className="container px-3 py-3 text-center">
                    {/* <!--Search Input--> */}
                    <input type="text" className="w-100 mx-auto rounded-5 py-3 px-4 bg-main-color mb-5 text-white"
                        onChange={handleLocationChange}
                        placeholder="Find your location..." id="search" />
                    {/* Weather Data Display */}


                    {weatherData && weatherData.current && weatherData.forecast && (
                        <div className="row g-0">
                            {/* Today Weather Card */}
                            <WeatherCard title="Today" location={weatherData.location} data={weatherData.forecast.forecastday[0]} />

                            {/* Tomorrow Weather Card */}
                            {weatherData.forecast.forecastday[1] && (
                                <WeatherCard title="Tomorrow" data={weatherData.forecast.forecastday[1]} />
                            )}

                            {/* Day after Tomorrow Weather Card */}
                            {weatherData.forecast.forecastday[2] && (
                                <WeatherCard title="Day after Tomorrow" data={weatherData.forecast.forecastday[2]} />
                            )}
                        </div>
                    )}


                </div>
            </div>
            <div className= "container my-3">
                <p className="text-info  display-6  p-0 ">Show 14-days forcast</p>
                <button className="btn  btn-primary my-2 w-100  " onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show forecast-table'}</button>
                {isVisible && <ForecastTable location={location} />} {/* Conditionally render MyComponent */}
            </div>
        </>
    )
}
