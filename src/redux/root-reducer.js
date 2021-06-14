// import {combineReducers} from "redux";

/**
 *
 * @type {{weatherDataState: {}, weatherData: {city: {}, conditions: {today:{tempCel:string, dt:Date , tempFahr:string }[]}}, siteLoading: boolean}}
 */
const initialState = {
    siteLoading: false,
    weatherDataState: {
        tempView:{ unit: 'C', value: 'tempCel'},

    },
    weatherData: {
        city: {},
        conditions:{},
    },
}

export const weatherState = (state = initialState, action) => {

    switch (action.type) {
        case 'WEATHER_DATA':
            return {...state, weatherData: action.data};
        case 'UPDATE_STATE':
            return {...state, weatherDataState: {...state.weatherDataState, ...action.state}};
        case 'TOGGLE_TEMP_VIEW':
            const {unit} = state.weatherDataState.tempView
            const tempView = unit === 'C' ? { unit: 'F', value: 'tempFahr'} : { unit: 'C', value: 'tempCel'}
            return  {...state, weatherDataState:{...state.weatherDataState, tempView}}
        case 'TOGGLE_LOADING':
            return {...state, siteLoading: action.status};
        default:
            return state;
    }
};
