import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleMenu} from '../actions/index';
import './MenuOverlay.css';

class MenuOverlay extends Component {
    constructor(props) {
        super(props);
        this.dismissMenu = this.dismissMenu.bind(this);
    }

    dismissMenu() {
        this.props.toggleMenu(false);
    }
    render() {
        return (
            <div className='menu-overlay'>
                <ul className='menu'>
                    <li><Link to='/' onClick={this.dismissMenu}>home</Link></li>
                    <li><Link to='/news' onClick={this.dismissMenu}>news</Link></li>
                    <li><Link to='/shows' onClick={this.dismissMenu}>shows</Link></li>
                    <li><a href='/music' onClick={this.dismissMenu}>music</a></li>
                    <li><a href='/merch' onClick={this.dismissMenu}>merch</a></li>
                    <li><a href='/contact' onClick={this.dismissMenu}>contact</a></li>
                </ul>
            </div>
        );      
    }
    
}

function mapStateToProps(state) {
    return {showMenu: state.showMenu};
}

export default connect(mapStateToProps, {toggleMenu})(MenuOverlay);