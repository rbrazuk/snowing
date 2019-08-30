import React, {Component} from 'react';
import MenuIcon from './components/MenuIcon';
import Home from './components/Home';
import IconsBar from './components/IconsBar';
import MenuOverlay from './components/MenuOverlay';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <MenuOverlay />
          <MenuIcon />
          <Switch>
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

