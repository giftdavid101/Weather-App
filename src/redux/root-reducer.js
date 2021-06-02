import {combineReducers} from "redux";


const initialState = {
    siteLoading: false,
    weatherDataState: {},
    weatherData: {
        city: {},
        conditions: {},
    },
}

export const weatherState = (state = initialState, action) => {
    switch (action.type) {
        case 'WEATHER_DATA':
            return { ...state, weatherData: action.data };
        case 'UPDATE_STATE':
            return { ...state, weatherDataState: { ...state.weatherDataState, ...action.state } };
        case 'TOGGLE_LOADING':
            return { ...state, siteLoading: action.status };
        default:
            return state;
    }
};
