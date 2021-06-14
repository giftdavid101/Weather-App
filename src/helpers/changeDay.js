export const dayNight = () => {
    const curHr = new Date().getHours()
    console.log(curHr)
    if(curHr >= 1 && curHr <= 20){
        return './images/brown.jpg'
    } else if(curHr >= 7 && curHr <= 18){
        return './images/mobile.jpg'
    }
}