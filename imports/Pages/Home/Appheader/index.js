import React, { Component } from "react";
import { Menu, Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import climarkLogo from "../../Landing/images/climarklogo";
import styles from "./style.css";
export default class AppHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="nav-header">
       {/* <Segment inverted> */}
        <Menu borderless className="nav-bar-menu">
          <Menu.Item>
            <Link to="/">
            <img src={climarkLogo} className="climarklogoheader" />
            </Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item >
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/team">Team</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item>
            <Button>Log-in</Button>
          </Menu.Item>

          {/* <Menu.Item link>Team</Menu.Item>
          <Menu.Item link>About</Menu.Item>
          <Menu.Item link>Button</Menu.Item> */}
        </Menu>
        {/* </Segment> */}
      </div>
    );
  }
}
