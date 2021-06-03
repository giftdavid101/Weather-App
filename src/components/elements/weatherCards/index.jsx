import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {temperatureConverter} from "../../../helpers/teperatureConverter";
import {dateConverter} from "../../../helpers/dateCoverter";
import {Button, Card} from "@material-ui/core";
import {averageTemperature} from "../../../helpers/averageTemp";
import Container from "@material-ui/core/Container";
import ErrorRadios from "../radio";
import {getCurrentTime} from "../../../helpers/timee";
import {UPDATE_STATE} from "../../../redux/actions/weatherAction";
import './weatherCards.styles.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
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

    const toggleTemp = () => {
        const _temp = temp.key === 'tempCel' ? { key: 'tempFahr', unit: 'F' } : { key: 'tempCel', unit: 'C' };
        dispatch(UPDATE_STATE({ temp: _temp }));
    };

    console.log(avg(today))
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

    return (
        <div>
            {/*<div>*/}
            {/*    <span>*/}
            {/*    {temperatureConverter(activeData?.main?.feels_like, temp.unit === 'C')}*/}
            {/*        {temp.unit}*/}
            {/*    </span>*/}
            {/*</div>*/}

            <Container maxWidth="sm">
                <div className={'er'}>
                    <ErrorRadios dispatch={dispatch} setTemp={setTemp} temp={temp}/>
                </div>
            </Container>


            <h1>{temp.unit}</h1>
            <h2>{city.name}</h2>
            <h1>Weather for today</h1>
            <p>
                average temperature: {avg(today)[temp.unit.toLowerCase()]}
                {temp.unit}
            </p>


            <div>

                {/*{today &&*/}
                {/*today.map((el, i) => (*/}
                {/*    <div key={i}>*/}
                {/*         <span>*/}
                {/*            {temperatureConverter(activeData?.main?.feels_like, temp.unit === 'C')}*/}
                {/*             {temp.unit}*/}
                {/*        </span>*/}

                {/*        <span>{dateConverter(el.dt).time}</span>{' '}*/}

                {/*        average Temp: <span>i{`${el[temp.key]}${[temp.unit]}`}</span>*/}
                {/*        <span>{`${el[temp.key]}${[temp.unit]}`}</span>*/}
                {/*    </div>*/}
                {/*))}*/}
                { today&&
                   today.map((el, i) => (
                    <div key={i}>
                        <span>{dateConverter(el.dt).time}</span>{' '}

                        <span>{`${el[temp.key]}${[temp.unit]}`}</span>
                    </div>
                ))}
            </div>
            <Button variant="contained" color="pink" onClick={handlePagination(-3)}>
                Prev
            </Button>
            <Button variant="contained" color="pink" onClick={handlePagination(3)}>
                Next
            </Button>
            <div className={'card-style'}>
                {/*{allDays &&*/}
                {/*peekDays(allDays)*/}
                {/*    .slice(paginate.x, paginate.y)*/}
                {/*    .map((_date) => (*/}
                {/*        <>*/}
                {/*            <p>{_date}</p>*/}
                {/*            <div style={{display: "flex", height: "20vh"}}>*/}

                {/*                {*/}
                {/*                    allDays[_date].map((el, i) => (*/}
                {/*                    <Card key={i}>*/}
                {/*                        <div>{getDayOfWeek(el.dt_txt)}</div>*/}
                {/*                        {`${el[temp.key]}${[temp.unit]} `}*/}
                {/*                        <div>*/}
                {/*                            <p>{el.dt_txt}</p>*/}

                {/*                            <h4>{el.weather[0].description}</h4>*/}
                {/*                            <h1>*/}
                {/*                                avg: {avg(allDays[_date])[temp.unit.toLowerCase()]} {temp.unit}*/}
                {/*                            </h1>*/}
                {/*                            /!*<p>{resolveTime(el.dt_txt)}</p>*!/*/}

                {/*                        </div>*/}

                {/*                    </Card>*/}
                {/*                ))*/}


                {/*                }*/}
                {/*            </div>*/}

                {/*        </>*/}
                {/*    ))}*/}
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                {allDays &&
                peekDays(allDays)
                    .slice(paginate.x, paginate.y)
                    .map((_date, i) => (
                        <React.Fragment key={i}>
                            <div>

                                <p>{_date}</p>
                                <p>
                                    avg: {avg(allDays[_date])[temp.unit.toLowerCase()]}
                                    {temp.unit}
                                </p>
                                <div>
                                    {allDays[_date].map((el, i) => (
                                        <div key={i}>{`${el[temp.key]}${[temp.unit]} `}</div>

                                    ))}
                                </div>
                            </div>

                        </React.Fragment>
                    ))}

                <div>

                </div>
            </div>

        </div>
    );
};

export default Cards;