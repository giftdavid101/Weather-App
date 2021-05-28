import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './arrows.style.css'

const Arrows = ({activeCards,setActiveCards,weather,check, lent}) => {
    const isEqualArr = (arr1, arr2) => {
        return arr1.every(x => arr2.includes(x));
    }

    console.log(activeCards)
    const moveNext = () =>  {
        const maxCards = activeCards.length;
        if(activeCards >= 6) return;
        const next = activeCards.map(el => (el + 3));


        setActiveCards(next);
        console.log(setActiveCards)
        // console.log('hi')
        console.log(next)
    }

    const movePrev = () =>  {
        if(isEqualArr([1,2,3], activeCards)) return;
        setActiveCards(activeCards.map(el => (el - 3)));
    }
    return (
        <div className={'arrows'}>
            <div className={'arrows_arr'}>
                <button onClick={movePrev}  className={'ar'}><ArrowBackIosIcon style={{ fontSize: 40 }} /></button>
                <button onClick={moveNext} className={'ar'}> <ArrowForwardIosIcon style={{ fontSize: 40 }}/></button>
            </div>

        </div>
    );
};

export default Arrows;