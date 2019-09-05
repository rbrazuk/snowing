import React, { Component } from 'react';
import ShowsList from './ShowsList';
import './Shows.css';
import shows from '../data/shows';

class Shows extends Component {
    render() {
        console.log(shows);
        return (
            <div>
                <ShowsList shows={shows} />
            </div>
        );
    }
}

export default Shows;