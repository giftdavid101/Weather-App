import React, {useEffect, useState} from 'react';
import './card-directory.style.css';
import Axios from 'axios';
import WeatherCard from "../../elements/cards";
import Arrows from "../../elements/arrows";
import Grid from '@material-ui/core/Grid';

const CardDirectory = () => {
    const [weather, setWeather] = useState([])
    console.log(weather)
    const mainUrl = process.env.REACT_APP_APPID


    const requestWeatherForecast = (link = `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${mainUrl}&cnt=40`) => {
        Axios.get(link).then((response) => {
            const {data, status} = response
            console.log(response)

            if (status === 200) {
                setWeather(data.list)
            }
        }).catch((err) => {
            console.log(err)
        })

    }
    useEffect(() => {
        requestWeatherForecast()
        // eslint-disable-next-line
    }, [])


    return (
        <div className={'card-directory'}>
            <Arrows/>
            <div className={'weather-div'}>
                {
                    weather.map((el) => (
                        <WeatherCard weda={el} key={el.dt}/>
                    ))
                        .reduce((accumulator, currentValue) => {
                            // accumulator + currentValue.dt_txt
                            const getDay = (date) => {
                                const dayOfWeek = new Date(date).getDay();
                                return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
                            }
                            let currentDay = getDay((currentValue.props.weda.dt_txt))
                            if(!accumulator[currentDay]){
                                accumulator[currentDay] = []
                            }
                              accumulator[currentDay].push(currentValue.props.weda)
                            // console.log(accumulator.length)
                            console.log(currentDay)
                            return accumulator
                        } , [])
                }
            </div>

        </div>
    );
};

export default CardDirectory;