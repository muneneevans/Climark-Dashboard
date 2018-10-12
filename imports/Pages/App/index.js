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

import Home from "../Home";
import Field from "../Field";
import Landing from "../Landing";
import About from "../About";

const Routes = () => (
  <Router>
    <div>
      {/* <Menu
        fixed={"top"}
        inverted={false}
        pointing={false}
        secondary={false}
        size="large"
      >
        <Container>
          <Menu.Item as="a">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          <Menu.Item position="right">
            <Button as="a" inverted={false}>
              Log in
            </Button>
            <Button
              as="a"
              inverted={false}
              primary={true}
              style={{ marginLeft: "0.5em" }}
            >
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu> */}
      <Switch>
        <Route path="/ward/:ward" component={Field} />
        <Route path="/dashboard" component={Home} />
        <Route path="/home" component={Landing} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Landing} />
      </Switch>

      {/* <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable stretched center>
            <Grid.Row centered>
              <Header inverted as="h4">
                &copy; Copyryght Climark 2018
              </Header>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment> */}
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
