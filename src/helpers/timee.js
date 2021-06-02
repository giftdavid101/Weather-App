import {dateConverter} from "./dateCoverter";

export const getCurrentTime = (data) => {
    if (data) {
        return data.filter((el) => {
            const now = new Date().getHours();
            const _dataHour = +dateConverter(el.dt).time.split(':')[0];
            // console.log(now, _dataHour);
            return now <= _dataHour;
        })[0];
    }
    return {};
};

