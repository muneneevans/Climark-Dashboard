import React from "react";
import { Tab } from "semantic-ui-react";
import TemperatureForecast from "../TemperatureForecast";
import PrecipitationForecast from "../PrecipitationForecast";
import WindForecast from "../WindForecast";
import HumidityForecast from "../HumidityForecast";

const panes = [
  {
    menuItem: "Temperature",
    render: ({ Forecasts }) => <TemperatureForecast Forecasts={Forecasts} />
  },
  {
    menuItem: "Precipitation",
    render: ({ Forecasts }) => <PrecipitationForecast Forecasts={Forecasts} />
  },
  {
    menuItem: "Wind",
    render: ({ Forecasts }) => <WindForecast Forecasts={Forecasts} />
  },
  {
    menuItem: "Humidity",
    render: ({ Forecasts }) => <HumidityForecast Forecasts={Forecasts} />
  },
  {
    menuItem: "Solar",
    render: () => <Tab.Pane attached={false}>Solar</Tab.Pane>
  }
];

const Forecasts = ({ Forecasts }) => (
  <Tab menu={{ pointing: true }} panes={panes} Forecasts={Forecasts} />
);

export default Forecasts;
