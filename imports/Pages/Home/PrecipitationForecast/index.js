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
  Legend,
  Label
} from "recharts";
import dimensions from "react-dimensions";

const dayForcacst = (day, format = "hh a") => {
  return day.forecast.map(hour => {
    return {
      ...hour.precipitation,
      date: moment(hour.startTime).format(format)
    };
  });
};

const round = (number, decimal) => {
  return +(Math.round(number + `e+${decimal}`) + `e-${decimal}`);
};

const dayAverage = (day, format = "hh a") => {
  return {
    chance: round(
      day.forecast.reduce((total, hour, counter) => {
        return total + hour.precipitation.chance;
      }, 0) / day.forecast.length,
      2
    ),
    amount: round(
      day.forecast.reduce((total, hour, counter) => {
        return total + hour.precipitation.amount;
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

const PrecipitationForecast = ({ containerWidth, Forecasts, height = 350 }) => {
  return (
    <div>
      <Divider section hidden />
      <div>
        <Header as="h3">Hourly Precipitation forecasts</Header>
        <LineChart
          width={containerWidth}
          height={height}
          data={flatten(Forecasts)[0]}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />

          <YAxis label="mm" />

          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="chance" stroke="#e67e22" />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4CAF50"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#3498db"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>

      <Divider section />
      <Divider section hidden />
      <div>
        <Header as="h3">Average Precipitation forecasts for the week</Header>
        <LineChart
          width={containerWidth}
          height={height}
          data={flattenAllDays(Forecasts)}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />

          <YAxis            
            yAxisId="left"
            scale={"linear"}
            domain={["Math.ceil(dataMin)-5", "Math.ceil(dataMax)+5"]}
          >
            <Label value="mm" offset={-5} position="left" />
          </YAxis>
          <YAxis yAxisId="right" orientation="right">
            <Label value="%" offset={-30} position="right" />
          </YAxis>

          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            yAxisId="left"
            stroke="#e67e22"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3d3d3d"
            activeDot={{ r: 1 }}
            dot={false}
            yAxisId="left"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="chance"
            stroke="#3498db"
            activeDot={{ r: 1 }}
            dot={false}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default dimensions()(PrecipitationForecast);
