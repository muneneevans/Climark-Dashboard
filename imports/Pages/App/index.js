import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "../../Store/configureStore";

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
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <Routes />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
