import React, { Component } from 'react';
import './IconsBar.css';
class IconsBar extends Component {
    render() {
        return (
            <div className='icons-bar'>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-bandcamp"></i>
                <i className="fab fa-spotify"></i>
            </div>
        );
    }
}

export default IconsBar;