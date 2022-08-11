import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { instrument: 'Equities', value: 2400 },
    { instrument: 'Bonds', value: 1200 },
    { instrument: 'Cash', value: 800 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;


const PieChart2 = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
        <PieChart width={500} height={400}>
          <Pie
              data={data}
              cx="50%"
              cy="50%"
              // labelLine={false}
              // label={renderCustomizedLabel}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index
              }) => {

                const RADIAN = Math.PI / 180;
                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
                return (
                  <text
                    x={x}
                    y={y}
                    fill="#8884d8"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {data[index].instrument} ({value})
                  </text>
                );
              }}
              outerRadius={100}
              innerRadius={20}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
        </PieChart>
      </ResponsiveContainer>
  );
}

export default PieChart2