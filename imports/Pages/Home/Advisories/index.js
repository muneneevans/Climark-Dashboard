import React from "react";
import { AdvisoryDroughtIndex } from "./../../../api/advisorydraughtIndex";

import { Container, Grid, Image } from "semantic-ui-react";
import "./style.css";
import { AdvisoryMA } from "./../../../api/advisoryMA";
import { pastMoistureCondition } from "./../../../api/pastMoistureCondition";
import { pastRainfallCondition } from "./../../../api/pastRainfallCondition";
import { Tracker } from "meteor/tracker";

export default class Advisory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moistureAvailability: [],
      pastDroughtIndex: [],
      droughtIndex: [],
      pastMoisture: [],
      pastRainfall: [],
      deviation: 0,
      devRule: ""
    };
  }

  //mounting components
  componentDidMount() {
    console.log("Component mounted: Draught Index");
    this.droughtIndexTracker = Tracker.autorun(() => {
      Meteor.subscribe("pastRainfallCondition");
      Meteor.subscribe("advisoryMA");
      Meteor.subscribe("pastMoistureCondition");
      Meteor.subscribe("advisoryDroughtIndex");

      console.log(this.props.wardData.wardDetails.LOCATION_ID);
      const pastRainfall = pastRainfallCondition
        .find({
          locationId: String(this.props.wardData.wardDetails.LOCATION_ID)
        })
        .fetch();
      const droughtIndex = AdvisoryDroughtIndex.find({
        locationId: String(this.props.wardData.wardDetails.LOCATION_ID)
      }).fetch();
      const moistureAvailability = AdvisoryMA.find({
        locationId: String(this.props.wardData.wardDetails.LOCATION_ID)
      }).fetch();
      const pastMoisture = pastMoistureCondition
        .find({
          locationId: String(this.props.wardData.wardDetails.LOCATION_ID)
        })
        .fetch();

        this.setState({ droughtIndex: droughtIndex[0], pastMoisture: pastMoisture[0], pastRainfall: pastRainfall[0] ,moistureAvailability:moistureAvailability[0]});
       
       
      console.log("MoistureAvailability");
      console.log(moistureAvailability);
      console.log("past moisture condition");
      console.log(pastMoisture);
      console.log("drought index");
      // console.log(droughtIndex[0].locationId);
      // console.log(droughtIndex[0].advisoryA);
      console.log(droughtIndex);
      console.log("past Rainfall condition");
      console.log(pastRainfall);
      console.log(this.state.droughtIndex.advisoryA)
      console.log(this.state.pastRainfall.advisoryA)
      console.log(this.state.pastMoisture.advisoryA)
    });
  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log("Component will unmount Draught Index");
    console.log("hasvfvasjfvasfvasv");
    this.droughtIndexTracker.stop();
  }

  ///render the rainfall distribution
  render() {
    return (
      <div>
        <Grid columns={4} divided>
          <Grid.Row>
            <Grid.Column>
              <div className="AdvisoryHeader"> Drought Advisory Index</div>
              <Container>
                <div className="ui bulleted list">
                  <div className="item">
                    {this.state.droughtIndex.advisoryA}
                  </div>
                  <div className="item">
                    {this.state.droughtIndex.advisoryB}
                  </div>
                  <div className="item">
                    {this.state.droughtIndex.advisoryC}
                  </div>
                  <div className="item">
                    {this.state.droughtIndex.advisoryD}
                  </div>
                  <div className="ImplicationHeader"> Implication </div>
                  <div className="item">
                    {this.state.droughtIndex.implication}
                  </div>
                </div>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <div className="AdvisoryHeader"> Past Moisture Conditions</div>
              <Container>
                <div className="ui bulleted list">
                  <div className="item">{this.state.pastMoisture.advisoryA}</div>
                <div className="item">{this.state.pastMoisture.advisoryB}</div>
                <div className="ImplicationHeader"> Implication </div>
                <div className="item">{this.state.pastMoisture.implication}</div>
                
                </div>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <div className="AdvisoryHeader"> Past Rainfall Condition</div>
              <Container>
                <div className="ui bulleted list">
                  <div className="item">{this.state.pastRainfall.advisoryA}</div>
                <div className="item">{this.state.pastRainfall.advisoryB}</div>
                <div className="item">{this.state.pastRainfall.advisoryC}</div>
                <div className="ImplicationHeader"> Implication </div>
                <div className="item">{this.state.pastRainfall.implication}</div>
                </div>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <div className="AdvisoryHeader"> Moisture Availability </div>
              <Container>
                <div className="ui bulleted list">
                  <div className="item">{this.state.moistureAvailability.advisoryA}</div>
                <div className="item">{this.state.moistureAvailability.advisoryB}</div>
                <div className="ImplicationHeader"> Implication </div>
                <div className="item">{this.state.moistureAvailability.implication}</div>
               
                </div>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
