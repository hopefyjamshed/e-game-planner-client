import React from 'react';
import './Time.css'

const Time = (props) => {
    const { time } = props.info
    const { timeHandler } = props
    return (
        <div className='time'>
            <div onClick={() => timeHandler(time)} className='Time-space'>
                <h3 className='round'>{time}</h3>
            </div>
        </div>
    );
};

export default Time;