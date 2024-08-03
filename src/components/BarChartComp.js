// src/BarChartComponent.js

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: '5', uv: '6000' },
  { name: '9', uv: '8000' },
  { name: '11', uv: '5000' },
  { name: '13', uv: '7000' },
  { name: '15', uv: '6000' },
  { name: '17', uv: '4000' },
  { name: '19', uv: '10000' },
  { name: '21', uv: '15000' },
  { name: '23', uv: '12000' },
  { name: '25', uv: '8000' },
  { name: '27', uv: '9000' },
];

const BarChartComp = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8"  />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComp;
