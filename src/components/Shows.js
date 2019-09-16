import React, { Component } from 'react';
import ShowsList from './ShowsList';
import './Shows.css';
import shows from '../data/shows';

class Shows extends Component {
    render() {
        console.log(shows);
        return (
            <div className='shows'>
                <ShowsList shows={shows} />
                <button className='past-shows-button'>show past shows</button>
            </div>
        );
    }
}

export default Shows;