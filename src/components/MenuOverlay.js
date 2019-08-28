import React, {Component} from 'react';
import './MenuOverlay.css';

class MenuOverlay extends Component {
    render() {
        if (this.props.show) {
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
            )
        } else {
            return null;
        }
        
    }
}

export default MenuOverlay;