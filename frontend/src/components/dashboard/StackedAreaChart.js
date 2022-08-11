import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const data1 = [
    {
      year: '2020',
      equities: 2000,
      bonds: 1000,
    },
    {
      year: '2021',
      equities: 2100,
      bonds: 1050,
    },
    {
      year: '2022',
      equities: 2400,
      bonds: 1200,
    },
    {
      year: '2023',
      equities: 2600,
      bonds: 1400,
    },
    {
      year: '2024',
      equities: 2800,
      bonds: 1500,
    },
    {
      year: '2032',
      equities: 4500,
      bonds: 3000,
    },
  ];
const StackedAreaChart = () => {
    return (
      <ResponsiveContainer width={500} height="80%">
        <AreaChart
            width={500}
            height={400}
            data={data1}
            margin={{
              top: 50,
              right: 0,
              left: 40,
              bottom: 0,
          }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" label={{value:"Year",  position:"bottom"}}/>
        <YAxis label={{ value: 'Portfolio Value', angle: -90, position: 'left' }} />
        <Tooltip />
        
        <Area type="monotone" dataKey="equities" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="bonds" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
}

export default StackedAreaChart