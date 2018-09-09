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
  Legend
} from "recharts";
import dimensions from "react-dimensions";

const dayForcacst = (day, format = "hh a") => {
  return day.forecast.map(hour => {
    return {
      ...hour.temperatures,
      date: moment(hour.startTime).format(format)
    };
  });
};

const dayAverage = (day, format = "hh a") => {
  return {
    max:
      day.forecast.reduce((total, hour, counter) => {
        return total + hour.temperatures.max;
      }, 0) / day.forecast.length,
    min:
      day.forecast.reduce((total, hour, counter) => {
        return total + hour.temperatures.min;
      }, 0) / day.forecast.length,
    value:
      day.forecast.reduce((total, hour, counter) => {
        return total + hour.temperatures.value;
      }, 0) / day.forecast.length,
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
  // .reduce((accumulator, current) => {
  //   return [...accumulator, ...current];
  // }, []);

  // return flatten(forecasts, "dddd Do").reduce((accumulator, current) => {
  //   return [...accumulator, ...current];
  // }, []);
};

const averageAllDays = forecasts => {};

const TemperatureForecast = ({ containerWidth, Forecasts, height = 350 }) => {
  return (
    <div>
      <div>
        <LineChart
          width={containerWidth}
          height={height}
          data={flatten(Forecasts)[0]}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="max" stroke="#e67e22" />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#3498db"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3498db"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>

      <div>
        <LineChart
          width={containerWidth}
          height={height}
          data={flattenAllDays(Forecasts)}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          {/* <YAxis domain={["dataMin", "dataMax"]}  /> */}
          <YAxis domain={["Math.ceil(dataMin)-5", "Math.ceil(dataMax)+5"]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="max" stroke="#e67e22" dot={false} />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#3498db"
            activeDot={{ r: 1 }}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3d3d3d"
            activeDot={{ r: 1 }}
            dot={false}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default dimensions()(TemperatureForecast);
