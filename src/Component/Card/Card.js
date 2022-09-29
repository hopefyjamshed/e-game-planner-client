import React, { useEffect, useState } from 'react';
import './Card.css'


const Card = (props) => {
    const { img, id, name, time } = props.info
    const { Handler } = props

    return (
        <div>

            <div className='card'>
                <div className="card-data">
                    <img className='card-img' src={img} alt="" />
                    <h2>{name}</h2>
                    <h3 className='time'>Time required: {time} mins</h3>
                </div>
                <button onClick={() => Handler(time)} className='btn'>
                    <p>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Card;