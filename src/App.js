import React, {Component} from 'react';
import MenuIcon from './components/MenuIcon';
import Home from './components/Home';
import BandName from './components/BandName';
import IconsBar from './components/IconsBar';
import News from './components/News';
import Shows from './components/Shows';
import Music from './components/Music';
import Contact from './components/Contact';
import MenuOverlay from './components/MenuOverlay';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    var pathName = window.location.pathname;
    return (
      <BrowserRouter>
        <div className="app">
          {this.props.showMenu ? <MenuOverlay /> : null}
          {pathName !== '/' ? <BandName /> : null} 
          <MenuIcon />
          <Switch>
            <Route path='/news' component={News}/>
            <Route path='/shows' component={Shows} />
            <Route path='/music' component={Music} />
            <Route path='/contact' component={Contact} />
            <Route path="/" component={Home}/>
          </Switch>
          <IconsBar />
      </div>
    </BrowserRouter>
      
    );
  }
}

function mapStateToProps(state) {
  return {showMenu: state.showMenu};
}

export default connect(mapStateToProps)(App);

