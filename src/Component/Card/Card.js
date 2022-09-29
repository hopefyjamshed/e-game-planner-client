import React, { useEffect, useState } from 'react';
import './Card.css'


const Card = (props) => {
    const { img, id, name, time } = props.info

    return (
        <div className='card'>
            <div className="card-data">
                <img className='card-img' src={img} alt="" />
                <h2>{name}</h2>
                <h3 className='time'>Time required: {time} mins</h3>
            </div>
            <button className='btn'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Card;