// Reshapes//
// /**
//  * Reshapes response object from open weather api for this app
//  * @param {object} res -response from weather
//  * @returns {object}
//  */
//
// export const groupWeather = (res) =>{
//     try {
//         const {list} = res
//
//         console.log(list[0])
//         // console.log(list[0])
//
//         const getDay = (date) => {
//             const dayOfWeek = new Date(date).getDay();
//             return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
//         }
//         const groupDay = list.reduce((accumulator, currentValue, index, array) => {
//             // accumulator + currentValue.dt_txt
//
//             let dayy = getDay(currentValue.dt_txt)
//             console.log(getDay(currentValue.dt_txt))
//
//
//             // let dayy = currentValue.dt_txt
//             // console.log(accumulator)
//             accumulator[dayy] = []
//             for (let x of array) {
//                 // console.log(x)
//                 if (getDay(x.dt_txt) === dayy) {
//                     accumulator[dayy].push(
//                         {
//                             Day: getDay(currentValue.dt_txt),
//                             Kevin: x.main.temp,
//                             Celsius: x.main.temp,
//                             Fahrenheit: x.main.temp,
//                             Days: {...x}
//                         }
//                     )
//                 }
//
//                 // console.log(getDay(x.dt_txt))
//             }
//             return accumulator
//         })
//         return groupDay;
//
//     }
//     catch (e) {
//         return {}
//     }
// // try {
// //
// //
// // }
// // catch (e) {
// //
// //     return {}
// // }
//
//
// }





import {dateConverter} from "./dateCoverter";
import {temperatureConverter} from "./teperatureConverter";

/**
 * Reshapes response object from open weather api for this app
 * @param {object} response - response from openweather api
 * @returns {object}
 */
export const groupWeather = (response) => {
    // const getDay = (date) => {
    //     const dayOfWeek = new Date(date).getDay();
    //     return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    // }
    try {
        const { list } = response
        console.log(response)
        const _list = list.reduce((acc, cur, i, arr) => {
            const _pos = dateConverter(cur.dt).calDate()
            acc[_pos] = []
            for (let x of arr) {
                // check if date match, then group
                if (dateConverter(x.dt).calDate() === dateConverter(cur.dt).calDate()) {
                    acc[_pos].push({
                        tempKev: x.main.temp,
                        tempCel: temperatureConverter(x.main.temp, false),
                        tempFahr: temperatureConverter(x.main.temp),
                        ...x,
                    })
                }
            }
            return acc
        }, {})
        console.log(_list)
        return _list
    } catch (e) {

        return {}
    }

}