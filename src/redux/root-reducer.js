import {combineReducers} from "redux";


const initialState = {
    siteLoading: false,
    weatherDataState: {},
    weatherData: {
        city: {},
        conditions: {},
    },
}

export const weatherState = (state = initialState, action: any) => {
    switch (action.type) {
        case 'WEATHER_DATA':
            return { ...state, weatherData: action.data };
        case 'TOGGLE_LOADING':
            return { ...state, siteLoading: action.status };
        default:
            return state;
    }
};
