import React from 'react';
import './IconsBar.css';

export default (props) => {
    return (
        <div className='icons-bar'>
            <a href='https://www.facebook.com/snowingband/' target="_blank">
                <i className="fab fa-facebook-square"></i>
            </a>
            <a href='https://twitter.com/snowingtheband' target="_blank">
                <i className="fab fa-twitter-square"></i>
            </a>
            <i className="fab fa-instagram"></i>
            <a href='https://countyourluckystars.bandcamp.com/album/i-could-do-whatever-i-wanted-if-i-wanted'>
            <i className="fab fa-bandcamp"></i>
            </a>
            <a href='spotify:artist:7swQ7gmKDlIOsnl0bdnaXn'>
                <i className="fab fa-spotify"></i>
            </a>
            
        </div>
    );
}