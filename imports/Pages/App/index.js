import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import {
  Menu,
  Button,
  Container,
  Segment,
  Grid,
  Header
} from "semantic-ui-react";

import "./style.css";
import store from "../../Store/configureStore";

import Footer from "../Landing/Footer";

import Home from "../Home";
import Field from "../Field";
import Landing from "../Landing";
import About from "../About";
import Contact from "../Contact"

const Routes = () => (
  <Router>
    <div className="appContainer">
      <div className="bodyContainer">
        <Switch>
          <Route path="/ward/:ward" component={Field} />
          <Route path="/dashboard" component={Home} />
          <Route path="/home" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  </Router>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
