import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Grid, Image } from 'semantic-ui-react'
import Footer from "./Footer";
import AppHeader from "../Home/Appheader";

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

//import images
import tabletDashbaord from "./images/tablet.png";
import ctaLogo from "./images/cta.png";
import amfratechLogo from "./images/amfratech2.png";
import aWhereLogo from "./images/awhere.png";
import climarkLogo from "./images/climarklogo2.png";
import klmc_logo from "./images/klmc_logo.png";
class Home extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  getFeatureSection = () => (
    <section className="featuresContent">
      <Container>
        <div>
          <h2 className=" sloganDescription">
            Empowering climate-Smart Solutions through Technology
          </h2>
        </div>
        <h2 className="heading featureCardHeader">ABOUT CLIMARK</h2>
        <div className="featureCard mainCard">
          <img src={marker} className="featureIcon" />
          <h3 className="heading featureCardHeader">CLIMARK PROJECT</h3>
          <p className="featureCardDescription">
            This CLIMARK Project has been setup by the Technical Center for
            Agriculture and Rural Co-operation (CTA) in collaboration with
            aWhere and Amfratech Ltd to design and deploy a blended weather
            information management system that will enable the local
            pastoralists communities be aware of the weather patterns in the
            short term and long term, for pro-active and actionable
            recommendations in order to safeguard their livelihoods. We have
            three components in the weather information dissemination:
            Observations, Forecast and Advisories.{" "}
            {/* <a href="">Read more</a> */}
          </p>
        </div>
      </Container>

      <Grid divided="vertically" className="container">
        <Grid.Row columns={3}>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <div className="featureCard">
              <img src={binoculars} className="featureIcon" />
              <h3 className="heading  featureCardHeader">Observations</h3>
              <p className="featureCardDescription">
                We use our historical weather data to provide our users with the
                previous weather trends for appreciation of the short-term and
                long term weather pattern. Using graphical representation, we
                provide you with weather patterns for the past one month to
                current.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <div className="featureCard">
              <img src={wind} className="featureIcon" />
              <h3 className="heading  featureCardHeader">Forecasts</h3>
              <p className="featureCardDescription">
                We provide our users with near real-time weather information of
                their respective areas, with upcoming weather forecasts of the
                next one week to be able to plan for their needs and interests.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <div className=" advisoryCard">
              <img src={notebook} className="featureIcon" />
              <h3 className="heading  featureCardHeader">Advisories</h3>
              <p className="featureCardDescription">
                Climark Provides stakeholders with advisories towards resilience
                actions and offer tangible steps that local communities can
                follow for pro-active actionable recommendations in order to
                safeguard their livelihoods. These advisories are simplified to
                also highlight the impact of weather on pasture for livestock
                within the local pastoralists communities.
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Container className="findOutMoreSection">
        <Link className="outlineButton featuresButton" to="/about">
          Find out more
        </Link>
      </Container>
    </section>
  );

  getHeaderSection = () => (
    <section className="headerContent">
      <div className="header climarklogo">
        <h1 class="logoText" />
        <img src={climarkLogo} className="climarklogo2" />
      </div>
      <div />
    </section>
  );

  getDashboardSection = () => (
    <div className="dashboardSection">
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column only="tablet computer" tablet={8} computer={8}>
              <img src={tabletDashbaord} className="dashboardImage" />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Container>
                <div>
                  <h1 className="heading featureCardHeader">
                    Weather Information Dashboard
                  </h1>
                  <p className="dashboardContent">
                    Customize your experience by selecting any location within
                    the country and get data specific to that locality.
                  </p>

                  <Link
                    className="dashboardButton primaryButton  montserrat"
                    to="/dashboard"
                  >
                    Proceed to the Selection Dashboard
                  </Link>
                </div>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );

  getSponsorsSection = () => (
    <div className="sponsorsSection">
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column
              verticalAlign="middle"
              mobile={16}
              tablet={8}
              computer={8}
            >
              <h1 className="heading featureCardHeader">Partners</h1>
              <p className="sponsorContent">
                {" "}
                We are proud to work in close collaboration with our partners.
              </p>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Grid columns={3}>
                <Grid.Row>
                  <div className="logosContainer">
                    <a href="https://www.cta.int/en/" target="_blank">
                      <img
                        src={ctaLogo}
                        alt="cta logo"
                        className="sponsorImage"
                      />
                    </a>
                    <a href="http://www.awhere.com/" target="_blank">
                      <img
                        src={aWhereLogo}
                        alt="awhere logo"
                        className="sponsorImage"
                      />
                    </a>
                    <a href="http://amfratech.com/" target="_blank">
                      <img
                        src={amfratechLogo}
                        alt="awhere logo"
                        className="sponsorImage"
                      />
                    </a>
                  </div>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );

  render() {
    const { visible } = this.state;

    return (
      <div>
        <AppHeader />
        {this.getHeaderSection()}
        {this.getFeatureSection()}
        {this.getDashboardSection()}
        {this.getSponsorsSection()}

        <Footer />

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
