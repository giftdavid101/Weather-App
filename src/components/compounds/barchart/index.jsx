import React, {useEffect, useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {useSelector} from "react-redux";
import {dateConverter} from "../../../helpers/dateCoverter";
import './verticalbar.style.css'


const ChartData = {
    type: 'bar',
    labels: ['00', '3:00', 'Yellow', 'Green', 'Purple', 'Orange'],

    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const VerticalBar = () => {
    const {conditions: {today}, state: {tempView}} = useSelector(({weatherData, weatherDataState}) => ({
        conditions: weatherData.conditions,
        state: weatherDataState,


    }))

    const [data, setData] = useState(ChartData)


    useEffect(() => {
        if (today) {
            setData({
                ...data,
                labels: today.map((el) => dateConverter(el.dt).time.slice(0, 5)),
                datasets: [{...data.datasets[0], data: today.map((el) => +el[tempView.value])}]
            })
        }
    }, [today])

    return (
        <div className={'bar'}>
            <div className='header'>
                <h3 className='title'>Temperature and Celsius Chart </h3>
            </div>
            <Bar data={data} options={options} type={''}/>
        </div>
    );
}

export default VerticalBar;