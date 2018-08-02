import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/home" component={() => <div>no mans land</div>} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
