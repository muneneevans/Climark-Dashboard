import React from "react";
import { Grid, Image, Divider, Header } from "semantic-ui-react";
import "./style.css";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend
} from "recharts";
import dimensions from "react-dimensions";

const dayForcacst = (day, format = "hh a") => {
  return day.forecast.map(hour => {
    return {
      ...hour.solar,
      date: moment(hour.startTime).format(format)
    };
  });
};

const round = (number, decimal) => {
  return +(Math.round(number + `e+${decimal}`) + `e-${decimal}`);
};

const dayAverage = (day, format = "hh a") => {
  return {
    amount: round(
      day.forecast.reduce((total, hour, counter) => {
        return total + hour.solar.amount;
      }, 0) / day.forecast.length,
      2
    ),
    
    units: day.forecast[0].units,
    date: moment(day.date).format(format)
  };
};

const flatten = (forecasts, format) => {
  return forecasts.map(day => {
    return dayForcacst(day, format);
  });
};

const flattenAllDays = forecasts => {
  return forecasts.map(day => {
    return dayAverage(day, "dddd");
  });
};
const shift = forecasts => {
  forecasts.shift();
  return forecasts.map(day => {
    return dayAverage(day, "dddd");
  });
};

const SolarForecast = ({ containerWidth, Forecasts, height = 350 }) => {
  return (
    <div>
      <Divider section hidden />
      <div>
        <Header as="h3">Hourly Solar Forecasts for Today {moment(Forecasts[0].date).format('ll')}</Header>
        <LineChart
          width={containerWidth}
          height={height}
          data={flatten(Forecasts)[0]}
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis>
-            <Label value="Wh/m^2" angle={-90} position="insideLeft"/>
-          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {/* <Line type="monotone" dataKey="" stroke="#e67e22" /> */}
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#3d3d3d"
            activeDot={{ r: 8 }}
          />
          {/* <Line
            type="monotone"
            dataKey=""
            stroke="#3498db"
            activeDot={{ r: 8 }}
          /> */}
        </LineChart>
      </div>

      <Divider section />
      <Divider section hidden/>
      <div>
        <Header as="h3">Average Solar forecasts for the week between {moment(Forecasts[0].date).add('days', 0).format('ll')} and {moment(Forecasts[0].date).add('days', 6).format('ll')}</Header>
        <LineChart
          width={containerWidth}
          height={height}
          data={flattenAllDays(Forecasts)}
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis>
-            <Label value="Wh/m^2" angle={-90} position="insideLeft"/>
-          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {/* <Line type="monotone" dataKey="" stroke="#e67e22" /> */}
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#3d3d3d"
            activeDot={{ r: 8 }}
          />
          {/* <Line
            type="monotone"
            dataKey=""
            stroke="#3498db"
            activeDot={{ r: 8 }}
          /> */}
        </LineChart>
      </div>
    </div>
  );
};

export default dimensions()(SolarForecast);
