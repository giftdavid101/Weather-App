import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
    radioGroup:{
       flexDirection: theme.rows
    },
    root:{
        width:"100%",
        display:"flex",
        flexDirection: "row",
    }
}));

export default function ErrorRadios() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
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
                    <FormControlLabel value="celsius" control={<Radio />} label="Celsius" />
                    <FormControlLabel value="fahrenheit" control={<Radio />} label="Fahrenheit" />
                </RadioGroup>
            </FormControl>
        </form>
    );
}
