import React, { Component } from "react";
import {
  Grid,
  Image,
  Segment,
  Header,
  Icon,
  Tab,
  Button,
  Container
} from "semantic-ui-react";
import * as processTypes from "../../../Store/Shared/processTypes";
import ForecastMap from "../../../ui/ForecastMap";
import DailyObservations from "../DailyObservations";
import Forecasts from "../Forecasts";
import WardMap from "../LocationWidget";
import LocationWidget from "../LocationWidget";
import Advisories from "../Advisories";

import "./style.css";

class FieldWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideWidget: false
    };
  }
  render() {
    let { title = "Some Place", graphs, history, wardData } = this.props;
    return (
      <div className="fieldWidgetContainer">
        <Container>
          <div className="fieldHeaderContainer">
            <Grid stackable>
              <Grid.Row>
                <Grid.Column floated="left" mobile={16} tablet={5} computer={5}>
                  <Header as="h1">
                    <Icon name="map marker alternate" size="miny" />
                    <Header.Content>{title}</Header.Content>
                  </Header>
                </Grid.Column>
                <Grid.Column
                  floated="right"
                  mobile={16}
                  tablet={3}
                  computer={3}
                />
                <Grid.Column
                  floated="right"
                  mobile={16}
                  tablet={4}
                  computer={4}
                  className={"fieldWidgetButtonsContainer"}
                >
                  <button
                    className=" outlineButton fieldWidgetHideButton montserrat"
                    onClick={() => {
                      hideWidget: false;
                      this.setState({
                        ...this.state,
                        hideWidget: !this.state.hideWidget
                      });
                    }}
                  >
                    {this.state.hideWidget ? "Expand" : "Hide"}
                  </button>
                  <button
                    className=" primaryButton fieldWidgetViewMoreButton montserrat"
                    onClick={() => {
                      history.push(`/ward/${title}`);
                    }}
                  >
                    View More
                  </button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          {/* {!this.state.hideWidget && ( */}
          <Segment
            className={`fw_dashbaordContainer  ${
              this.state.hideWidget ? "m-fadeOut" : "m-fadeIn"
            } `}
          >
            <Grid divided celled="internally">
              <Grid.Row className="advisory">
                <Advisories wardData={wardData} />
              </Grid.Row>
              <Grid.Row columns={2} className="dataWidgetContainer">
                <Grid.Column computer={16} tablet={16} mobile={16}>
                  <Tab
                    menu={{ secondary: true, stackable: true }}
                    panes={panes}
                    graphs={graphs}
                    wardData={wardData}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          {/* )} */}
        </Container>
      </div>
    );
  }
}

const panes = [
  {
    menuItem: "Daily Observations",
    render: ({ graphs, wardData }) => {
      let { _process } = wardData.dailyObservations;

      return (
        <div>
          {_process === processTypes.SUCCESS && (
            <DailyObservations
              graphs={graphs}
              dailyObservations={wardData.dailyObservations.data}
            />
          )}
        </div>
      );
    }
  },
  {
    menuItem: "Forecasts",
    render: ({ graphs, wardData }) => {
      let { _process } = wardData.forecasts;

      return (
        <div>
          {_process === processTypes.SUCCESS && (
            <Forecasts
              Forecasts={wardData.forecasts.data}
              Norms={wardData.norms.data}
            />
          )}
        </div>
      );
    }
  }
];

export default FieldWidget;
