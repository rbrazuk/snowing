import React, { Component } from 'react';
import './Home.css';
import homeImage from '../images/home.jpg';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1 className='band-name'>snowing</h1>
                <img className='home-image' src={homeImage} alt='Snowing'/>    
                <p className='bio'>emotional rock music from philadelphia</p>          
            </div>
        );
    }
}

export default Home;