import React from "react";
import {
  Grid,
  Image,
  Segment,
  Header,
  Icon,
  Tab,
  Button
} from "semantic-ui-react";
import * as processTypes from "../../../Store/Shared/processTypes";
import ForecastMap from "../../../ui/ForecastMap";
import DailyObservations from "../DailyObservations";
import Forecasts from "../Forecasts";
import WardMap from "../LocationWidget";
import LocationWidget from "../LocationWidget";
import Advisories from "../Advisories"

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
            <Forecasts Forecasts={wardData.forecasts.data} Norms={wardData.norms.data}/>
          )}
        </div>
      );
    }
  },
  // {
  //   menuItem: "Current Conditions",
  //   render: () => (
  //     <Image src="https://im2.ezgif.com/tmp/ezgif-2-7543dffd0d.gif" />
  //   )
  // }
];

const FieldWidget = ({ title = "Some Place", graphs, history, wardData }) => {
  return (
    <div className="fieldWidgetContainer">
      <div className="fieldHeaderContainer">
        <Header as="h1">
          <Icon name="map marker" />
          <Header.Content>{title}</Header.Content>
          <Button
            onClick={() => {
              history.push(`/ward/${title}`);
            }}
          >
            View More
          </Button>
        </Header>

      </div>
      <Segment>
        <Grid divided celled="internally">
          <Grid.Row className="advisory">
        <Advisories wardData={wardData}/>
        </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column computer={4} tablet={16} mobile={16}>
              {/* <ForecastMap/> */}
              <WardMap ward={wardData.wardDetails} />
            </Grid.Column>

            <Grid.Column computer={12} tablet={16} mobile={16}>
              <Tab
                menu={{ secondary: true, pointing: true, stackable: true }}
                panes={panes}
                graphs={graphs}
                wardData={wardData}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default FieldWidget;
