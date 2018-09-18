import React from "react";
import { AdvisoryDroughtIndex } from "./../../../api/advisorydraughtIndex";

import { Container, Grid, Image } from "semantic-ui-react";
import "./style.css";
//import {LastSevenDaysDI} from './../../../api/lastSevenDays';
import { Tracker } from "meteor/tracker";

export default class Advisory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      droughtIndex: [],
      pastDroughtIndex: [],
      deviation: 0,
      devRule: ""
    };
  }

  //mounting components
  componentDidMount() {
    console.log("Component mounted: Draught Index");
    this.droughtIndexTracker = Tracker.autorun(() => {
      Meteor.subscribe("advisoryDroughtIndex");
      // Meteor.subscribe('lastsevendaysdi');
      console.log(this.props.wardData.wardDetails.LOCATION_ID);
      const droughtIndex = AdvisoryDroughtIndex.find({
        locationId: String(this.props.wardData.wardDetails.LOCATION_ID)
      }).fetch();

      this.setState({ droughtIndex: droughtIndex[0] });

      console.log(droughtIndex[0].locationId);
      console.log(droughtIndex[0].advisoryA);
      console.log(droughtIndex);
    });
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log("Component will unmount Draught Index");
    this.droughtIndexTracker.stop();
  }

  ///render the rainfall distribution
  render() {
    return (
      <div>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <div className="AdvisoryHeader"> Drought Advisory Index</div>
              <Container>
              <div className="ui bulleted list">
                <div className="item">{this.state.droughtIndex.advisoryA}</div>
                <div className="item">{this.state.droughtIndex.advisoryB}</div>
                <div className="item">{this.state.droughtIndex.advisoryC}</div>
                <div className="item">{this.state.droughtIndex.advisoryD}</div>
              </div>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
              
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
