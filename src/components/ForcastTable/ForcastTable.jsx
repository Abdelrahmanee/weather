import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.css'
const ForecastTable = ({location}) => {

    const [weatherData, setWeatherData] = useState([]);


    const fetchData = async (location) => {
        try {
            const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=2a452b3aace048fb9a9133707240505&q=${location}&days=14`);
            setWeatherData(data.forecast.forecastday);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString('en-US', { weekday: 'short' })}, ${date.getDate()} ${date.toLocaleDateString('en-US', { month: 'short' })}`;
    };
    useEffect(() => {
        fetchData(location); // Fetch initial weather data for London on component mount
    }, [location]);


    const directionToArrow = {
        'N': '↑',     // North
        'NE': '↗',    // Northeast
        'E': '→',     // East
        'SE': '↘',    // Southeast
        'S': '↓',     // South
        'SW': '↙',    // Southwest
        'W': '←',     // West
        'NW': '↖',    // Northwest
        'NNE': '↗',   // North-Northeast
        'ENE': '↗',   // East-Northeast
        'ESE': '↘',   // East-Southeast
        'SSE': '↘',   // South-Southeast
        'SSW': '↙',   // South-Southwest
        'WSW': '↙',   // West-Southwest
        'WNW': '↖',   // West-Northwest
        'NNW': '↖'    // North-Northwest
    };

    function directionToArrows(direction) {
        const parts = direction.match(/[A-Z]{1,2}/g);
        const arrows = parts.map(part => directionToArrow[part]).join('');
        return arrows;
    }


    return (

        <div className="tb-scroll  container">
            <div >
                <table className="   table-striped  table-hover table">
                    <thead >
                        <tr >
                            <th >&nbsp;</th>
                            <th colSpan="3" className="sep text-center " >Conditions</th>
                            <th colSpan="4" className="sep text-center " >Comfort</th>
                            <th colSpan="2" className="sep text-center " >Precipitation</th>
                            <th colSpan="3" className="sep text-center " >Sun</th>
                        </tr>
                        <tr >
                            <th  >Day</th>
                            <th className="sep">&nbsp;</th>
                            <th  >Temperature</th>
                            <th >Weather</th>
                            <th className="sep">Feels Like</th>
                            <th >Wind</th>
                            <th  >&nbsp;</th>
                            <th >Humidity</th>
                            <th className="sep">Chance</th>
                            <th >Amount</th>
                            <th className="sep">UV</th>
                            <th >Sunrise</th>
                            <th  >Sunset</th>
                        </tr>
                    </thead>
                    <tbody className="t-body">
                        {weatherData.map((dayData, index) => (

                            <tr key={index}>
                                <td>
                                    <span >{formatDate(dayData.date)}</span>
                                </td>
                                <td >
                                    <img title={dayData.day.condition.text} src={dayData.day.condition.icon} height="40" alt={dayData.day.condition.text} />
                                </td>
                                <td>{`${dayData.day.maxtemp_c} / ${dayData.day.mintemp_c}`}&nbsp;°C</td>
                                <td className="small">{dayData.day.condition.text}</td>
                                <td className="sep">{dayData.hour[new Date().getHours()].feelslike_c}&nbsp;°C</td>
                                <td>{dayData.day.maxwind_kph} km/h</td>
                                <td>
                                    <span >{directionToArrows(dayData.hour[new Date().getHours()].wind_dir)} </span>
                                </td>
                                <td>{dayData.day.avghumidity}%</td>
                                <td className="sep">{dayData.day.daily_chance_of_rain}%</td>
                                <td className="sep">-</td>
                                <td className="sep">{dayData.hour[new Date().getHours()].uv}</td>
                                <td>{dayData.astro.sunrise}</td>
                                <td>{dayData.astro.sunset}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
        </div>


    )



};

export default ForecastTable;
