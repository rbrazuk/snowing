import React, { Component } from 'react';
import './MenuIcon.css';
import { connect } from 'react-redux';
import {toggleMenu} from '../actions/index';

class MenuIcon extends Component {
    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
        this.props.toggleMenu(false);
    }

    toggleMenu() {
        console.log(this.props.showMenu);
        this.props.toggleMenu(!this.props.showMenu);
    }

    render() {
        return (
            <div className='menu-icon' onClick={this.toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {showMenu: state.showMenu};
}

export default connect(mapStateToProps, {toggleMenu})(MenuIcon);