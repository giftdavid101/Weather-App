import React, {useEffect} from 'react';
import './card-directory.style.css';
import Axios from 'axios';
// import WeatherCard from "../../elements/cards";
// import Arrows from "../../elements/arrows";
import {groupWeather} from "../../../helpers/sortWeather";
import { connect } from 'react-redux';
import { TOGGLE_LOADING, WEATHER_DATA } from '../../../redux/actions/weatherAction'
import Cards from "../../elements/weatherCards";


let check = [];
const CardDirectory = (props) => {
    // const [value, setValue] = useState("");
    // const [city, setCity] = useState("Lagos");
    // const [typeCity, setTypeCity] = useState("");
    // const [img, setImg] = useState("");

    // const citySelect = (e) => {
    //     e.preventDefault();
    //     setCity(typeCity);
    // };
    // const [weather, setWeather] = useState([])
    // const [activeCards, setActiveCards] = useState([0,1,2]);
    // console.log(setActiveCards)
    //toggleLoader
    const { siteLoading,  setWeatherData } = props;

    const requestWeatherForecast = () => {
        Axios.get('https://api.jsonbin.io/v3/b/60c71fdf98ca6c704eaf6aef', {headers:{"X-Master-Key": '$2b$10$6J6GKAo2prhIp8YjANPyUe2u6BskS09atZVcOvXwL2yRmIWiBECYm'}})
            .then((res)=>{
                console.log(res)
            })
        Axios.get(`${process.env.REACT_APP_BASE_URL}/data/2.5/forecast?q=Abuja,ng&APPID=${process.env.REACT_APP_APPID}&cnt=40`)
            .then(({data, status}) => {
            check = groupWeather(data)
            console.log( check)

            if (status === 200) {
                const conditions = groupWeather(data);

                setWeatherData({
                    conditions: { today: conditions[new Date().getDate()],
                                  allDays: conditions
                                 },
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
                {siteLoading ? (
                    <div className={'site-loader'}>
                        <p>Loading...</p>
                    </div>
                ) :(
                    <>
                        <Cards/>
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



