import React, { Component } from 'react';
import Release from './Release';
import pileImage from '../images/pile.jpg';
import summerImage from '../images/summer.jpg';
import whateverImage from '../images/whatever.jpg';
import pumpFakeImage from '../images/pump.jpg';
import fyebImage from '../images/fyeb.jpg';

import './Music.css';

class Music extends Component {
    render() {
        return (
            <div className='music'>
                <Release 
                    title='That Time I Sat In A Pile Of Chocolate' 
                    image={pileImage} />
                <Release 
                    title="Summer Singles split 7'"
                    image={summerImage} />
                <Release 
                    title='Pump Fake b/w Scherbatsky' 
                    image={pumpFakeImage} />
                <Release 
                    title='I Could Do Whatever I Wanted If I Wanted' 
                    image={whateverImage} />
                <Release 
                    title='Fuck Your Emotional Bullshit' 
                    image={fyebImage} />
            </div>
        );
    }
}

export default Music;