import React from "react";
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
  },
  {
    menuItem: "Current Conditions",
    render: () => (
      <Image src="https://im2.ezgif.com/tmp/ezgif-2-7543dffd0d.gif" />
    )
  }
];

const FieldWidget = ({ title = "Some Place", graphs, history, wardData }) => {
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
              <Grid.Column floated="right" mobile={16} tablet={3} computer={3}>
                <button
                  className="outlineButton fieldWidgetViewMoreButton montserrat"
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
        <Segment className="fw_dashbaordContainer">
          <Grid divided celled="internally">
            <Grid.Row className="advisory">
              <Advisories wardData={wardData} />
            </Grid.Row>
            <Grid.Row columns={2} className="dataWidgeContainer">
              
              <Grid.Column computer={16} tablet={16} mobile={16}>
                <Tab
                  menu={{ secondary: true,  stackable: true }}
                  panes={panes}
                  graphs={graphs}
                  wardData={wardData}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};

export default FieldWidget;
