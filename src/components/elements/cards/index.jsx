import React from 'react';
import './card.style.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
       minWidth: 275,
      margin:'20px'

    }
});
export default function WeatherCard({ check,index}) {
    console.log(index)
 let arr = []

   const detail = arr.push(check)
    console.log(detail)

    // console.log(weda)
    // console.log(weda)
    const classes = useStyles();

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();

        return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];

    }

    console.log(check)
    console.log(check[0].dt)
    // console.log(weda)
    // console.log(weda[0].dt)
    // console.log(weda[0].weather[0].main)
    // console.log(weda)
    // console.log(Object.keys(weda[0].dt))

    return (
        <Card className={classes.root}>
            <CardHeader
                title={getDayOfWeek(check[0].dt_txt)}
            />
            <CardContent>
                <Typography>

                    {/*{check[0].weather[0].main}*/}

                </Typography>
                <Typography>

                    {/*/!*{*!/  Description: {weda[0].weather[0].description}*/}
                    {/*    weda*/}
                    {/*}*/}
                  Description:  {check.map((el,index) => (
                        <div key={el.id}>{el.weather[0].description}</div>
                    ))
                    }
                </Typography>
                <Typography>
                    {check.map((el,index) => (
                        <div key={index}>{el.main.temp}</div>
                    ) )

                    }
                    {/*{weda.main.temp_max}*/}
                </Typography>
                <Typography>
                    {/*{weda.main.temp}*/}
                </Typography>
                <Typography>
                    {/*{weda.weather.main}*/}
                </Typography>
                <Typography>
                   {/*Speed: {weda.wind.speed}*/}
                </Typography>
                <Typography>
                   {/*Weather: {weda.weather.id}*/}
                </Typography>
            </CardContent>



        </Card>
    );
}
