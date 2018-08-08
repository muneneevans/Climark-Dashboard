import React, { Component } from "react";
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
const HumidityChart = ({ containerWidth, data }) => {
  return <div>
      <LineChart width={containerWidth} height={500} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="max" stroke="#e67e22" />
      <Line type="monotone" dataKey="min" stroke="#3498db" activeDot={{ r: 8 }} />
      </LineChart>
    </div>;
};

export default dimensions()(HumidityChart);
