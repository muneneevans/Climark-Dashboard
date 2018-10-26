
import React, { Component } from "react";
import { Link } from "react-router-dom";

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

class Footer extends Component {

    state = {};
    hideFixedMenu = () => this.setState({ visible: false });
    showFixedMenu = () => this.setState({ visible: true });

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
                          <Link to="/about">
                            <li>About</li>
                          </Link>
                          <li>Contacts</li>
                        </ul>
                      </Grid.Column>
                      <Grid.Column mobile={8} tablet={5} computer={5}>
                        <h3 className="footerHeading">Social</h3>
                        <ul className="footerContent">
                          <li>
                            <a  target="blank_" href="https://www.facebook.com/ClimarkProject/?modal=admin_todo_tour">
                              Facebook
                            </a>
                          </li>
                          <li>
                            <a target="blank_" href="https://twitter.com/ClimarkProject">
                              Twitter{" "}
                            </a>
                          </li>
    
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
            
           <section>
           {this.getFooterSection()}
           </section>
           
    
            
            
          </div>
        );
      }    
}

export default Footer;