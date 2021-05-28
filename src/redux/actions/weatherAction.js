export const WEATHER_DATA = (data) => {
    return {
        type: 'WEATHER_DATA',
        data,
    };
};

export const TOGGLE_LOADING = (status) => {
    return {
        type: 'TOGGLE_LOADING',
        status,
    };
};
