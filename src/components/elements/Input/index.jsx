import React from 'react';
import './inp.style.css'

const Input = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit} className={'inp'}>
            <input className={'my-inp'} placeholder={'Search City'}/>
        </form>
    );
};

export default Input;