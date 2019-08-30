import React, {Component} from 'react';
import { connect } from 'react-redux';
import './MenuOverlay.css';

class MenuOverlay extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        
        if (this.props.showMenu) {
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

function mapStateToProps(state) {
    return {showMenu: state.showMenu};
}



export default connect(mapStateToProps)(MenuOverlay);