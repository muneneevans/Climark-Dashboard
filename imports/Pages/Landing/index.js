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

//import images
import tabletDashbaord from "./images/tablet.png";
import ctaLogo from "./images/cta.png";
import amfratechLogo from "./images/amfratech.png";

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
        <div className="featureCard">
              <img src={marker} className="featureIcon" />
              <h3 className="heading  featureCardHeader"> About Climark </h3>
              <p className="featureCardDescription">
              This CLIMARK Project has been setup by the Technical Center for Agriculture and Rural 
Co-operation (CTA) in collaboration with aWhere and Amfratech Ltd to design and deploy a blended weather information management system that will enable 
the local pastoralists communities be aware of the weather patterns in the short term and long term, for pro-active and
actionable recommendations in order to safeguard their livelihoods.

              </p>
            </div>
      </Container>

      <Grid divided="vertically" className="container">
        <Grid.Row columns={3}>
          {/* <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="featureCard">
              <img src={marker} className="featureIcon" />
              <h3 className="heading  featureCardHeader"> Custom Locations</h3>
              <p className="featureCardDescription">
                Magnam repudiandae alias deleniti ab non. Numquam rem rerum nisi
                nesciunt. Reprehenderit sed minima iure ullam excepturi.
                Cupiditate veritatis consectetur totam perspiciatis
              </p>
            </div>
          </Grid.Column> */}
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
        <button className="outlineButton featuresButton"> Find out more</button>
      </Container>
    </section>
  );

  getHeaderSelection = () => (
    <section className="headerContent">
      <div className="header climarklogo">
        <h1>CLIMARK</h1>
        <p className="headingDescription">
          Enhancing Market Response to Resilince in Livestock Value Chains
        </p>
      </div>
      <Container>
        <Grid
          className="contentSection"
          columns={2}
          reversed="mobile vertically"
        >
          <Grid.Row verticalAlign="bottom">
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className="headerSectionButtonContainer">
                <button className="ui headerSectionButton primaryButton montserrat">
                  Find out more
                </button>
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
    </section>
  );

  getDashboardSection = () => (
    <div className="dashboardSection">
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column only="tablet computer" tablet={8} computer={8}>
            <img src={tabletDashbaord} className="dashboardImage" />
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={8}
            verticalAlign="middle"
          >
            <Container>
              <div>
                <h1 className="heading">Weather Information Dashboard</h1>
                <p className="dashboardContent">
                  Customize your experience by selecting any location within the
                  country and get data specific to that locality.
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
              <h1 className="heading">Sponsors</h1>
              <p className="sponsorContent">
                {" "}
                We are proud to work in close collaboration with our partners.
              </p>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Grid columns={2}>
                <Grid.Row className="logosContainer">
                  <Grid.Column>
                    <img src={ctaLogo} className="sponsorImage" />
                  </Grid.Column>
                  <Grid.Column>
                    <img src={amfratechLogo} className="sponsorImage" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
  getFooterSection = () => (
    <div className="footerSection">
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Grid columns={3}>
                <Grid.Row className="logosContainer">
                  <Grid.Column mobile={8} tablet={5} computer={5}>
                    <h3 className="footerHeading">Product</h3>
                    <ul className="footerContent">
                      <li>Team</li>
                    </ul>
                  </Grid.Column>
                  <Grid.Column mobile={8} tablet={5} computer={5}>
                    <h3 className="footerHeading">Company</h3>
                    <ul className="footerContent">
                      <li>About</li>
                      <li>Contacts</li>
                    </ul>
                  </Grid.Column>
                  <Grid.Column mobile={8} tablet={5} computer={5}>
                    <h3 className="footerHeading">Social</h3>
                    <ul className="footerContent">
                      <li>Facebook</li>
                      <li>Twitter</li>
                      <li>Blog</li>
                    </ul>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
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
        {this.getDashboardSection()}
        {this.getSponsorsSection()}
        {this.getFooterSection()}

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
