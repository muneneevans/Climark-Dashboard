import React, { Component } from "react";
import { Menu, Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import climarkLogo from "../../Landing/images/climarklogo2";
import styles from "./style.css";
export default class AppHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary stackable>
        <Menu.Item name="home" className="logoMenu">
          <Link to="/">
            <img src={climarkLogo} className="climarklogoheader" />
          </Link>
        </Menu.Item>

        <Menu.Item position="right">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/contact">Contact us</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>

      // <div className="nav-header">
      //   <Menu borderless className="appHeader" stackable>
      //     <Menu.Item>
      //     </Menu.Item>
      //     {/*<Menu.Item>
      //       <Button>Log-in</Button>
      //     </Menu.Item>
      //     <Menu.Item>
      //       <Link to="/team">Team</Link>
      //     </Menu.Item>
      //    <Menu.Item link>Team</Menu.Item>
      //     <Menu.Item link>About</Menu.Item>
      //     <Menu.Item link>Button</Menu.Item> */}
      //   </Menu>
      // </div>
    );
  }
}
