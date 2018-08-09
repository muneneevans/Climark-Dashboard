import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";


//import screens
import FieldBanner from "./FieldBanner";
import FieldSummary from "./FieldSummary";

import "./style.css";
class FieldPage extends Component {
  render() {
    let { match } = this.props;
    let title = match.params.ward;
    return (
      <div>
        <FieldBanner title={title} />
        <Container className="fieldContentContainer">
          <FieldBanner title={title} />
          {/* <Header as="h2">{title}</Header> */}
          <FieldSummary />

          <Segment>
            <Header as="h2">Temperature</Header>
          </Segment>
          <Segment>
            <Header as="h2">Precipitation</Header>
          </Segment>
          <Segment>
            <Header as="h2">Solar</Header>
          </Segment>
          <Segment>
            <Header as="h2">Relative Humidity</Header>
          </Segment>
          <Segment>
            <Header as="h2">Wind</Header>
          </Segment>
          <Segment>
            <Header as="h2">Temperature</Header>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default FieldPage;
