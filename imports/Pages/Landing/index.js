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

///import icons
import wind from "./icons/wind.svg";
import marker from "./icons/marker.svg";
import notebook from "./icons/notebook.svg";
import binoculars from "./icons/binoculars.svg";

class Home extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  getFeatureSection = () => (
    <section className="featuresContent">
      <Container>
        <h2 className="heading featuerHeader">
          Communication through relevant information
        </h2>
      </Container>

      <Grid divided="vertically" className="container">
        <Grid.Row columns={4}>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="featureCard">
              <img src={marker} className="featureIcon" />
              <h3 className="heading  featureCardHeader"> Custom Locations</h3>
              <p className="featureCardDescription">
                Magnam repudiandae alias deleniti ab non. Numquam rem rerum nisi
                nesciunt. Reprehenderit sed minima iure ullam excepturi.
                Cupiditate veritatis consectetur totam perspiciatis
              </p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="featureCard">
              <img src={binoculars} className="featureIcon" />
              <h3 className="heading  featureCardHeader"> Observations</h3>
              <p className="featureCardDescription">
                Magnam repudiandae alias deleniti ab non. Numquam rem rerum nisi
                nesciunt. Reprehenderit sed minima iure ullam excepturi.
                Cupiditate veritatis consectetur totam perspiciatis
              </p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="featureCard">
              <img src={wind} className="featureIcon" />
              <h3 className="heading  featureCardHeader"> Forecasts</h3>
              <p className="featureCardDescription">
                Magnam repudiandae alias deleniti ab non. Numquam rem rerum nisi
                nesciunt. Reprehenderit sed minima iure ullam excepturi.
                Cupiditate veritatis consectetur totam perspiciatis
              </p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className=" advisoryCard">
              <img src={notebook} className="featureIcon" />
              <h3 className="heading  featureCardHeader">Advisories</h3>
              <p className="featureCardDescription">
                Magnam repudiandae alias deleniti ab non. Numquam rem rerum nisi
                nesciunt. Reprehenderit sed minima iure ullam excepturi.
                Cupiditate veritatis consectetur totam perspiciatis
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container className="findOutMoreSection">
        <button className="outlineButton"> Find out more</button>
      </Container>
    </section>
  );

  render() {
    const { visible } = this.state;

    return (
      <div>
        <section className="headerblock">
          <div className="container" />
        </section>

        {this.getFeatureSection()}

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
