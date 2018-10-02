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
          <div class='ui grid'>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div class='column'>
    <img src='https://react.semantic-ui.com/images/wireframe/image.png' class='ui image' />
  </div>
  <div> kjabfasdbkjvbskjvbhjb</div>
</div>
       
       </div>
    
    );
  }
}

export default Home;
