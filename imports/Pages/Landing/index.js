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

  getHeaderSelection = () => (
    <section className="headercontent">
      <div className="header climarklogo"> CLIMARK</div>
      <Container>
        <Grid
          className="contentSection"
          columns={2}
          reversed="mobile vertically"
        >
          <Grid.Row verticalAlign="bottom">
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className="headerSectionButtonContainer">
                <button className="ui headerSectionButton">Find out more</button>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className="headerBannerContainer">
                <div className="headerBanner">
                  <h1 className="headerBannerHeader"> Respond, Overcome</h1>
                  <div className="headerBannerContentContainer">
                    <p className="headerBannerContent">
                      {" "}
                      Leveraging the power of technology to thrive in areas of
                      harsh weather
                    </p>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      {/* <div className="contentsection">
        <div>adsfadsfa leorm </div>
        <div className="heading featureheader"> Respond , Overcome</div>
        <div className="footercontent">
        
          Leveraging the power of technology to work in areas of harsh weather
        </div>
       
        
      </div>
      <div className="headerbutton">
          <button class="ui button">Find out more</button>
        </div> */}
    </section>
  );

  render() {
    const { visible } = this.state;

    return (
      <div>
        <section className="headerblock">
          <div className="container" />
        </section>
        {this.getHeaderSelection()}
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
