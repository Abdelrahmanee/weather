import logo_1 from '../../assets/images/icon-compass.png'
import logo_2 from '../../assets/images/icon-wind.png'
import logo_3 from '../../assets/images/icon-umberella.png'

export const WeatherCard = ({ title, data, location = '' }) => {
    const { date, day, condition } = data;
    // Function to format date in a readable format
    const formatDate = (dateString) => {
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };

    return (
        <div className="item col-lg-4 m-0 bg-main-color">
            <div className="d-flex justify-content-between py-2 px-3 bg-main-color text-light rounded-start">
                <p className="my-auto">{formatDate(date)}</p>
                <span>
                    <span className="my-auto">{new Date(date).getDate()}</span>
                    <span className="my-auto ps-1">{new Date(date).toLocaleDateString('en-US', { month: 'long' })}</span>
                </span>
            </div>
            <div className="item-content text-start text-light p-3 text-center pt-5">
                <p className="text-info">{location.name}</p>
                <img className="next_condition_img" src={day?.condition.icon} alt="" />
                <h3>
                    <span>{day?.maxtemp_c}</span>
                    <span>
                        <sup>o</sup> C
                    </span>
                </h3>
                <h5 className="text-white-50">
                    <span>{day?.mintemp_c}</span>
                    <span>
                        <sup>o</sup> C
                    </span>
                </h5>
                <p className="next_condition_text fs-6 text-light-blue">{day.condition.text}</p>
               {location ?  <div className="item-footer d-flex text-light p-3">
                    <div className="d-flex me-3">
                        <img src={logo_3} className="footer-icons me-2" alt="logo" />
                        <p >{day.daily_chance_of_rain}%</p>
                    </div>
                    <div className="d-flex me-3">
                        <img src={logo_1} className="footer-icons mx-2" alt="logo" />
                        <p >{day.avgvis_km} km/h</p>
                    </div>
                    <div className="d-flex">
                        <img src={logo_1} className="footer-icons mx-2" alt="logo" />
                        <p >{data.hour[new Date().getHours()].wind_dir}</p>
                    </div>
                </div> : ''}
            </div>
        </div>
    );
};