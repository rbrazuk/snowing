import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <p>
                    You can email us at <a href='mailto:snowingtheband@gmail.com'>snowingtheband@gmail.com</a>
                </p>
                <p>
                    <a href='http://www.squareofopposition.com/'>Square of Opposition</a> and <a href='http://countyourluckystars.limitedrun.com/'>Count Your Lucky Stars</a> released 
                    our records. Please support them!
                </p>
                <p>
                    You can click on the icons below to get to our various social media 
                    accounts, but I bet you figured that out on your own.
                </p>
            </div>)
    }
}

export default Contact;