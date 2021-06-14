import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {UPDATE_STATE} from "../../../redux/actions/weatherAction";
import {useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
        color: "white",

    },
    radioGroup:{
       flexDirection: theme.rows,

    },
    root:{
        width:"100%",
        display:"flex",
        flexDirection: "row",
        // color: "white",
        backgroundColor: "white"
    }
}));

export default function ErrorRadios({setTemp, temp}) {
    const toggleTemp = () => {
     setTemp(temp.key === 'tempCel' ? { key: 'tempFahr', unit: 'C' } : { key: 'tempCel', unit: 'F' });
    };


    const classes = useStyles();
    const [currentTemp, setCurrentTemp] = useState('f')
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText('');
        setError(false);

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === 'celsius') {
            setHelperText('You got it!');
            setError(false);

        } else if (value === 'fahrenheit') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl component="fieldset"  className={classes.formControl}>
                <RadioGroup classes={{root:classes.root}} aria-label="quiz" name="weather" value={value} onChange={handleRadioChange}>
                    <FormControlLabel
                        value="celsius"
                        onChange={toggleTemp}
                        control={<Radio />}

                        label="Celsius"
                    />

                    <FormControlLabel
                        value="fahrenheit"
                        control={<Radio />}
                        label="Fahrenheit"
                        onChange={toggleTemp}
                    />
                </RadioGroup>
            </FormControl>
        </form>
    );
}
