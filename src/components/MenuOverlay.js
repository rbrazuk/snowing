import React from 'react';
import './MenuOverlay.css';

export default (props) => {
    return (
        <div className='menu-overlay'>
            <ul className='menu'>
                <li>news</li>
                <li>shows</li>
                <li>music</li>
                <li>merch</li>
                <li>contact</li>
            </ul>
        </div>
    );      
}

