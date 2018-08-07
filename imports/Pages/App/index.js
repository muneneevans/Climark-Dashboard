import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../../Store/configureStore";

import Home from "../Home";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/home" component={() => <div>no mans land</div>} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
