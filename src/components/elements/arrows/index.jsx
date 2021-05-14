import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './arrows.style.css'

const Arrows = () => {
    return (
        <div className={'arrows'}>
            <div className={'arrows_arr'}>
                <div className={'ar'}><ArrowBackIosIcon style={{ fontSize: 40 }} /></div>
                <div className={'ar'}> <ArrowForwardIosIcon style={{ fontSize: 40 }}/></div>
            </div>

        </div>
    );
};

export default Arrows;