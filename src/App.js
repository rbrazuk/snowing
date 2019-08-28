import React, {Component} from 'react';
import MenuIcon from './components/MenuIcon';
import Home from './components/Home';
import IconsBar from './components/IconsBar';
import MenuOverlay from './components/MenuOverlay';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showMenu: false};
  }

  showMenuCallback = (show) => {
    this.setState({showMenu: !this.state.showMenu});
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          {this.state.showMenu && <MenuOverlay />}
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

export default App;
