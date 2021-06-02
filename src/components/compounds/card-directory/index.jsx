import React, {useEffect, useState} from 'react';
import './card-directory.style.css';
import Axios from 'axios';
import WeatherCard from "../../elements/cards";
import Arrows from "../../elements/arrows";
import {groupWeather} from "../../../helpers/sortWeather";
import { connect } from 'react-redux';
import { TOGGLE_LOADING, WEATHER_DATA } from '../../../redux/actions/weatherAction'
import Cards from "../../elements/weatherCards";


let check = [];
const CardDirectory = (props) => {

    // const [weather, setWeather] = useState([])
    // const [activeCards, setActiveCards] = useState([0,1,2]);
    // console.log(setActiveCards)
    const { siteLoading, toggleLoader, setWeatherData } = props;

    const requestWeatherForecast = () => {
        Axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${process.env.REACT_APP_APPID}&cnt=40`)
            .then(({data, status}) => {
            check = groupWeather(data)
            console.log( check)

            if (status === 200) {
                const conditions = groupWeather(data);
                setWeatherData({
                    conditions: { today: conditions[new Date().getDate()], allDays: conditions },
                    city: data.city,
                });
                console.log(conditions)
              //   console.log(data.list[0])
            }
            // console.log( groupWeather(data))
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        requestWeatherForecast()
        // eslint-disable-next-line
    }, [])

    console.log(check)
    return (
        <div className={'card-directory'}>
            {/*<Arrows   weather={check} activeCards={activeCards} setActiveCards={setActiveCards}/>*/}

            <div className={'weather-div'}>
                {/*{*/}
                {/*    // Object.values(groupWeather(weather))*/}
                {/*    // check*/}
                {/*    activeCards*/}

                {/*        .map((el, index,array) =>*/}
                {/*        // setActiveCards(check[index])*/}
                {/*        // activeCards[index]*/}
                {/*               ( Object.values(groupWeather(weather))[index])*/}
                {/*            ?*/}
                {/*            (*/}
                {/*        <WeatherCard index={index} check={ Object.values(groupWeather(weather))[index]} key={index}/>*/}
                {/*                    // weda={el}*/}
                {/*    )*/}
                {/*    : undefined*/}
                {/*    )*/}
                {/*}*/}

                {siteLoading ? (
                    <div className={'site-loader'}>
                        <p>Loading...</p>
                    </div>
                ) :(
                    <>
                        <Cards/>
                        {/*<WeatherCard />*/}
                        {/*<Chart />*/}
                    </>
                )}

            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => ({
    toggleLoader: (status) => dispatch(TOGGLE_LOADING(status)),
    setWeatherData: (data) => dispatch(WEATHER_DATA(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDirectory);
// export default CardDirectory;


