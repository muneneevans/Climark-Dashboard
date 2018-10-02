import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Grid, Image } from 'semantic-ui-react'

import styles from "./style.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";

class Home extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    const { visible } = this.state;

    return (
      <div>
        <section className="headerblock">
          <div className="container" />
        </section>

        <section className="headercontent">
          <div className="container" />
        </section>

        <section className="headerimage">
          <div className="container" />
        </section>

        <section className="headerabout">
          <div className="container" />
        </section>
      </div>
    );
  }
}

export default Home;
