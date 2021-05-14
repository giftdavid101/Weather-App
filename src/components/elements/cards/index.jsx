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
export default function WeatherCard({ weda}) {
    const classes = useStyles();

    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date).getDay();
        return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
    return (
        <Card className={classes.root}>
            <CardHeader
                title={getDayOfWeek(weda.dt_txt)}
            />
            <CardContent>
                <Typography>
                    {weda.dt_txt}
                </Typography>
                <Typography>
                    {weda.main.temp_max}
                </Typography>
                <Typography>
                    {weda.main.temp}
                </Typography>
                <Typography>
                    {weda.weather.main}
                </Typography>
                <Typography>
                   Speed: {weda.wind.speed}
                </Typography>
                <Typography>
                   Weather: {weda.weather.id}
                </Typography>
            </CardContent>



        </Card>
    );
}
