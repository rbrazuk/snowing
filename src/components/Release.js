import React from 'react';
import './Release.css';

export default (props) => {
    return (
        <div className='release'>
            <img src={props.image} alt={props.title} />
            <div>{props.title}</div>
        </div>
    );
}