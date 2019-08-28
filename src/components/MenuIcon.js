import React, { Component } from 'react';
import './MenuIcon.css';

class MenuIcon extends Component {
    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        //this.setState(state => ({showMenu: !state.showMenu}));
        console.log("clicked");
        alert("clicked");
      }
    render() {
        return (
            <div className='menu-icon' onClick={this.toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
        );
    }
}

export default MenuIcon;