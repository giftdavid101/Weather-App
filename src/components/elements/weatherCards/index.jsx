import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dateConverter} from "../../../helpers/dateCoverter";
import {Button, Card} from "@material-ui/core";
import {averageTemperature} from "../../../helpers/averageTemp";
import ErrorRadios from "../radio";
import {getCurrentTime} from "../../../helpers/timee";
import {UPDATE_STATE} from "../../../redux/actions/weatherAction";
import './weatherCards.styles.css'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import VerticalBar from "../../compounds/barchart";
import Input from "../../elements/Input/index"


const useStyles = makeStyles({
    root: {
        // width:100,
        minWidth: 275,
        margin: 25,
        background: "transparent",

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardStyle: {
        margin: 10,
    }


});
const avg = averageTemperature;
const Cards = () => {
    const classes = useStyles();
    const {
        weatherData: {
            conditions: {today, allDays},
            city,
        },
    } = useSelector((state) => state);
    const dispatch = useDispatch()
    const activeData = getCurrentTime(today);
    console.log(activeData)
    console.log(activeData.dt_txt)


    const toggleTemp = () => {
        const _temp = temp.key === 'tempCel' ? {key: 'tempFahr', unit: 'F'} : {key: 'tempCel', unit: 'C'};
        dispatch(UPDATE_STATE({temp: _temp}));
    };


    console.log(avg(today))
    console.log(today)
    const [temp, setTemp] = useState({key: 'tempCel', unit: 'C'});

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();

        return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];

    }

    const [paginate, setPaginate] = useState({x: 0, y: 3});
    const handlePagination = (mv) => {
        return (e) => {
            if (paginate.x + mv >= 0 && paginate.y + mv <= 6) {
                setPaginate({x: paginate.x + mv, y: paginate.y + mv});
            }
        };
    };
    const peekDays = (allDays) => {
        if (allDays) {
            const _keys = Object.keys(allDays);
            return _keys.sort((a, b) => {
                return allDays[a][0].dt - allDays[b][0].dt;
            });

        }
        return [];
    };
    console.log(peekDays(allDays))
    console.log(allDays)
    let arr;
    const timeNow = new Date().toString().split(" ")[4];


    return (
        <div>
            <div className={'normal-screen'}>
                <div className={"first-layout"}>
                    <div className={'er'}>
                        <ErrorRadios dispatch={dispatch} setTemp={setTemp} temp={temp}/>
                    </div>
                    <Input/>
                    <div className={'today'}>
                        <h2 className={'city'}>{city.name}</h2>
                        <h1>Weather for today</h1>
                        <p>
                            {/*average temperature:*/}
                            <span className={"today_avgTemp"}>  {avg(today)[temp.unit.toLowerCase()]} &deg;</span>
                            <span className={"today_celsius"}>{temp.unit}</span>
                        </p>

                        <div>


                            {today &&

                            <div style={{display: "flex", margin: "auto"}}>
                                {/*<div>{getDayOfWeek(el.dt_txt)}</div>*/}
                                <span className={"today-time"}>{dateConverter(today[0].dt).time}</span>{' '}
                                {/*<div>{`${today[0][temp.key]}${[temp.unit]}`}</div>*/}
                                <div className={"weather_description"}
                                     style={{margin: '1px'}}>{(today[0].weather[0].main)}</div>

                            </div>

                            }
                        </div>
                    </div>
                </div>


                <div className={'card-style'}>
                    <div className={"card-dir"}>
                        {allDays &&
                        peekDays(allDays)
                            .slice(paginate.x, paginate.y)
                            .map((_date, i) => (
                                <React.Fragment key={i}>
                                    <Card classes={{
                                        root: classes.root
                                    }}>
                                        <p className={'date'}>{dateConverter(allDays[_date][0].dt).dateFormat}</p>
                                        {/*<p>{_date}</p>*/}
                                        {/*<div>{new Date()}</div>*/}
                                        <Typography variant="body2" component="p">
                                            Average Temperature of the day
                                            is: {avg(allDays[_date])[temp.unit.toLowerCase()]}
                                            {temp.unit}
                                        </Typography>
                                        <div className={'temps'}>
                                            {allDays[_date].map((el, i) => (

                                                <div className={'s'} key={i}>
                                                    <div className={'weekday'}>{getDayOfWeek(el.dt_txt)}</div>
                                                    <div className={'time'}>{dateConverter(el.dt).time}</div>
                                                    <div className={'we'}>{`${el[temp.key]}${[temp.unit]} `}</div>
                                                    <div className={'weather-desc'}>{el.weather[0].main}</div>

                                                </div>


                                            ))}
                                        </div>
                                    </Card>

                                </React.Fragment>
                            ))}
                    </div>
                    <div className={'btn_div'}>
                        <Button variant="contained" color="pink" onClick={handlePagination(-3)}>
                            Prev
                        </Button>
                        <Button variant="contained" color="pink" onClick={handlePagination(3)}>
                            Next
                        </Button>
                    </div>
                    <div style={{width: "40%"}}>
                        <VerticalBar/>
                    </div>


                </div>
            </div>
            <div className={"mobile"}>
                <input placeholder={'Search City'}/>

                {/*<Button variant="contained" color="primary" onClick={toggleTemp}>*/}
                {/*    {temp.unit}*/}
                {/*</Button>*/}
                <div>
                    <h2 className={'m-city'}>{city.name}</h2>

                </div>
                <div className={'weather-info'}>
                    {today &&
                    <div style={{display: "flex", margin: "auto"}}>

                        {/*<div className={"mobile-time-today"}>{dateConverter(today[0].dt).time}</div>{' '}*/}
                        {/*<span>{dateConverter(today[0].dt_txt).time}</span>{' '}*/}
                        {/*<div>{`${today[0][temp.key]}${[temp.unit]}`}</div>*/}
                        <div className={"m-weather_description"} style={{margin: '1px'}}>

                            {(today[0].weather[0].main)}
                        </div>
                        <p className={'m-temperature'}>
                            <span className={"m-today_avgTemp"}>  {avg(today)[temp.unit.toLowerCase()]} &deg;</span>
                            <span className={"m-today_celsius"}>{temp.unit}</span>
                        </p>
                    </div>
                    }

                </div>
                {/*<div style={{width:'100%'}}>*/}
                <VerticalBar/>
                {/*</div>*/}


                <div className={"mobile-cards-dir sm-screen-4h "}>
                    {allDays &&
                    peekDays(allDays)
                        .slice(paginate.x, paginate.y)
                        .map((_date, i) => (
                            <div className={''} key={i}>
                                <div className={'mobile-card '}>
                                    <div className={'d-top'}>
                                        <h2 className={'date'}>{dateConverter(allDays[_date][0].dt).dateFormat}</h2>

                                        <div className={'m-temp'}>
                                            {avg(allDays[_date])[temp.unit.toLowerCase()]}
                                            {temp.unit}
                                        </div>
                                    </div>

                                    <div className={'temps'}>
                                        <div className={"weather-data9h"}>
                                            {allDays[_date].map((el, i) => (

                                                <div className={'m-s'} key={i}>
                                                    <div className={'weekday'}>{getDayOfWeek(el.dt_txt)}</div>
                                                    <div className={'time'}>{dateConverter(el.dt).time}</div>
                                                    <div className={'we'}>{`${el[temp.key]}${[temp.unit]} `}</div>
                                                    <div className={'weather-desc'}>{el.weather[0].main}</div>

                                                </div>


                                            ))}
                                        </div>
                                        <div className={"weather-data4h"}>
                                            {allDays[_date].map((el, i) => (

                                                <div className={'m-s'} key={i}>
                                                    <div className={'weekday'}>{getDayOfWeek(el.dt_txt)}</div>
                                                    <div className={'time'}>{dateConverter(el.dt).time}</div>
                                                    {/*<div className={'we'} >{`${el[temp.key]}${[temp.unit]} `}</div>*/}
                                                    <div className={'weather-desc'}>{el.weather[0].main}</div>

                                                </div>


                                            )).shift()}
                                        </div>


                                    </div>

                                </div>

                            </div>
                        ))}

                </div>

                <div className={'m-btn_div'}>
                    <button className={'btn'} onClick={handlePagination(-3)}>
                        Prev
                    </button>
                    <button className={'btn'} onClick={handlePagination(3)}>
                        Next
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Cards;