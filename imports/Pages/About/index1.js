import React, {Component} from "react";
import {Link} from "react-router-dom";
// import ImageSlider from "./../../ui/ImageSlider";
// import { Grid, Image } from 'semantic-ui-react'

import styles from "./style.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, {Component} from "react";
import {Link} from "react-router-dom";
import Banner from "../Home/Banner";

import {Container, Grid, Segment} from "semantic-ui-react";
import "./style.css";

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

// /import icons
import wind from "./icons/wind.svg";
import marker from "./icons/marker.svg";
import notebook from "./icons/notebook.svg";
import binoculars from "./icons/binoculars.svg";

//import images
import tabletDashbaord from "./images/tablet.png";
import ctaLogo from "./images/cta.png";
import amfratechLogo from "./images/amfratech.png";
import aWhereLogo from "./images/awhere.png";
import climarkLogo from "./images/climarklogo.png";
class About extends Component {

  state = {};

  hideFixedMenu = () => this.setState({visible: false});
  showFixedMenu = () => this.setState({visible: true});

  getFeatureSection = () => (<section className="featuresContent">
    <Container>
      <h2 className="heading featureCardHeader">
        CLIMARK PROJECT
      </h2>
      <div className="featureCard mainCard">
        <img src={marker} className="featureIcon"/>
        <h3 className="heading  featureCardHeader">
          ABOUT CTA
        </h3>
        {/* <p className="featureCardDescription">
          <h1> ABOUT CTA </h1> */
        }
        <p className="featureCardDescription">
          The Technical Centre for Agricultural and Rural Cooperation (CTA) is an international institution of the African, Caribbean and Pacific (ACP) Group of States and the European Union (EU). Its mission is to advance food and nutritional security, increase prosperity and encourage sound natural resource management in ACP countries. CTA promotes information and knowledge sharing; supports the development and implementation of evidence-based, multi-stakeholder policies and strategies; promotes inclusive value chain development and use of ICTs; and strengthens the capacities of agricultural and rural development institutions and communities across the ACP. CTA operates under the framework of the Cotonou Partnership Agreement and is funded by the EU.
        </p>
        <h3 className="heading  featureCardHeader">
          ABOUT CLIMARK
        </h3>
        <p className="featureCardDescription">
          Some 20 million livestock keepers in the Horn of Africa are threatened by increasingly frequent and severe droughts. Their food and nutrition security, indeed the existence of the pastoral economic system, is under threat. The frequent droughts have eroded the pastoralists’ adaptive capacity and resilience to such an extent that almost every drought now results in a humanitarian crisis. Drought has always been a feature of the Eastern African ecosystem, so why are pastoralists no longer able to cope with drought? One explanation is that they lack assets other than livestock that would allow them to recover from a drought disaster. Moreover, market mechanisms for risk transfer are not yet operational in the pastoral livestock system. By definition, pastoralists’ main wealth is their livestock, which they are unlikely to transform into less risky assets. This prevents them from integrating fully in the non-livestock markets.
        </p>
        <p className="featureCardDescription">
          {" "}
          This CLIMARK (Climate Livestock And Markets) Project has been setup by CTA in order to design and deploy a blended weather information management system to enhance Market Response to Resilience in Livestock Value Chains in East Africa
        </p>
        <p className="featureCardDescription">
          {" "}
          This will enable the local community be aware of the weather patterns in the short term and long term for pro-active actionable recommendations in order to safeguard their livelihoods.
        </p>
        <p className="featureCardDescription">
          {" "}
          The application of technology will therefore be required in making sure that near-real time information is sent through to the various stakeholders in the pastoralist community eco-system via channels that are accessible to them (SMS, Dashboard and Mobile Application) In this regard, Amfratech has developed a functional, easy-to-use mobile based application and dashboard that collects weather information from our agri-weather platform partner, aWhere to provide forecasted weather patterns and actionable information to stakeholders within the pastoralist communities in Marsabit and Isiolo Counties
        </p>

      </div>
    </Container>

    {/* <Container className="findOutMoreSection">
      <Link className="outlineButton featuresButton" to="/dashboard">
        Find out more</Link>
    </Container> */
    }
  </section>);

  getHeaderSection = () => (<section className="headerContent">
    <div>
      <div className="header climarklogo">
        <h1 class="logoText">Climark</h1>
        <img src={climarkLogo} className="climarklogo2"/>
      </div>
      <div>
        <h2 className="headingDescription">
          Enhancing Market Response to Resilience in Livestock Value Chains
        </h2>
        ======= getAboutSection = () => (
        <section>
          <div className="aboutSection">
            <h1>
              ABOUT CTA
            </h1>
            <p>
              The Technical Centre for Agricultural and Rural Cooperation (CTA) is an international institution of the African, Caribbean and Pacific (ACP) Group of States and the European Union (EU). Its mission is to advance food and nutritional security, increase prosperity and encourage sound natural resource management in ACP countries. CTA promotes information and knowledge sharing; supports the development and implementation of evidence-based, multi-stakeholder policies and strategies; promotes inclusive value chain development and use of ICTs; and strengthens the capacities of agricultural and rural development institutions and communities across the ACP. CTA operates under the framework of the Cotonou Partnership Agreement and is funded by the EU.
            </p>
          </div>
          <div className="aboutSection">
            <h1>
              ABOUT CLIMARK
            </h1>
            <p>
              Some 20 million livestock keepers in the Horn of Africa are threatened by increasingly frequent and severe droughts. Their food and nutrition security, indeed the existence of the pastoral economic system, is under threat. The frequent droughts have eroded the pastoralists’ adaptive capacity and resilience to such an extent that almost every drought now results in a humanitarian crisis. Drought has always been a feature of the Eastern African ecosystem, so why are pastoralists no longer able to cope with drought? One explanation is that they lack assets other than livestock that would allow them to recover from a drought disaster. Moreover, market mechanisms for risk transfer are not yet operational in the pastoral livestock system. By definition, pastoralists’ main wealth is their livestock, which they are unlikely to transform into less risky assets. This prevents them from integrating fully in the non-livestock markets.
            </p>
            <p>
              {" "}
              This CLIMARK (Climate Livestock And Markets) Project has been setup by CTA in order to design and deploy a blended weather information management system to enhance Market Response to Resilience in Livestock Value Chains in East Africa
            </p>
            <p>
              {" "}
              This will enable the local community be aware of the weather patterns in the short term and long term for pro-active actionable recommendations in order to safeguard their livelihoods.
            </p>
            <p>
              {" "}
              The application of technology will therefore be required in making sure that near-real time information is sent through to the various stakeholders in the pastoralist community eco-system via channels that are accessible to them (SMS, Dashboard and Mobile Application) In this regard, Amfratech has developed a functional, easy-to-use mobile based application and dashboard that collects weather information from our agri-weather platform partner, aWhere to provide forecasted weather patterns and actionable information to stakeholders within the pastoralist communities in Marsabit and Isiolo Counties
            </p>
          </div>
        </section>
        ); getFooterSection = () => (<div className="footerSection">
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
                          <li>
                            <a href="https://www.facebook.com/ClimarkProject/?modal=admin_todo_tour">
                              Facebook
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/ClimarkProject">
                              Twitter{" "}
                            </a>
                          </li>

                          <li>Blog</li>
                        </ul>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Grid.Column>
                <Grid.Column verticalAlign="middle"/>
              </Grid.Row>
            </Grid>
          </Container>
        </div>);

        {/* render() {
      //     // return (
      //     //   <div>
      //     //   <section className="headerblock">
      //     //     <div className="container"/>
      //     //   </section>
      //     //   {this.getHeaderSection()}
      //     //   {this.getFeatureSection()}
      //     //   {this.getFooterSection()}
      //     //
      //     //   <section className="headerimage">
      //     //     <div className="container"/>
      //     //   </section>
      //     //
      //     //   <section className="headerabout">
      //     //     <div className="container"/>
      //     //   </section>
      //     // </div>);
      //   } */}
      

}
export default About;
