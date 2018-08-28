import React from "react";
import { Tab } from "semantic-ui-react";
import TemperatureForecast from "../TemperatureForecast";
import PrecipitationForecast from "../PrecipitationForecast";
import WindForecast from "../WindForecast";
import HumidityForecast from "../HumidityForecast";
import ZeroWidget from "../ZeroWidget";

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
    render: ({ Norms }) => <ZeroWidget Norms={Norms} />
  }
];

const Forecasts = ({ Forecasts, Norms }) => (
  <Tab menu={{ pointing: true }} panes={panes} Forecasts={Forecasts} Norms={Norms}/>
);

export default Forecasts;
