import React, {useEffect, useState} from 'react';
import './card-directory.style.css';
import Axios from 'axios';

import WeatherCard from "../../elements/cards";
import Arrows from "../../elements/arrows";
import Grid from '@material-ui/core/Grid';
import {groupWeather} from "../../../helpers/sortWeather";

let check;
const CardDirectory = () => {

    const [weather, setWeather] = useState([])
    const [activeCards, setActiveCards] = useState([0,1,2]);
    // const [check, setCheck] = useState([weather])

    const mainUrl = process.env.REACT_APP_APPID


    const requestWeatherForecast = (link = `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${mainUrl}&cnt=40`) => {
        Axios.get(link).then((response) => {
            const {data, status} = response

           check = groupWeather(data)

           //  console.log(Object.values(check))
           // let arr = Object.values(check)
           //  weather.push(check)
            // console.log(check)
            // console.log(response)
            console.log(groupWeather(data))

            if (status === 200) {
                // groupWeather(data)
                // groupWeather(data.list)
              // groupWeather(setWeather(data.list))

                // setWeather(data.list[0])
               setWeather(data.list)

              //   console.log(data.list[0])
            }
         // let ans =   groupWeather(data)
         //    console.log(ans)
            console.log(setWeather(data))
            // console.log( groupWeather(data))
            console.log( Array.from(check))
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
            <Arrows activeCards={activeCards} setActiveCards={setActiveCards}/>

            <div className={'weather-div'}>
                {
                    Object.values(groupWeather(weather)).map((el, index,array) => (

                        <WeatherCard weda={el} key={index}/>

                    ))
                }
            </div>
        </div>
    );
};

export default CardDirectory;


