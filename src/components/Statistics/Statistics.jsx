import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = [
        {
            AssigmentNumerNo: 'Assigment No: 1',
            AssigmentNumber: 60
          },
          {
            AssigmentNumerNo: 'Assigment No: 2',
            AssigmentNumber: 60
          },
          {
            AssigmentNumerNo: 'Assigment No: 3',
            AssigmentNumber: 60
          },
          {
            AssigmentNumerNo: 'Assigment No: 4',
            AssigmentNumber: 53
          },
          {
            AssigmentNumerNo: 'Assigment No: 5',
            AssigmentNumber: 60
          },
          {
            AssigmentNumerNo: 'Assigment No: 6',
            AssigmentNumber: 26
          },
          {
            AssigmentNumerNo: 'Assigment No: 7',
            AssigmentNumber: 60
          },
          {
            AssigmentNumerNo: 'Assigment No: 8',
            AssigmentNumber: 60
          }
    ];
    return (
        <div className='container mx-auto mt-20'>
            <AreaChart
            width={1200}
            height={400}
            data={data} 
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="AssigmentNumerNo" />
                <YAxis />
                <Tooltip />
                <Area dataKey="AssigmentNumber" stroke= "#ffc658" fill="#82ca9d" type="monotone"></Area>
            </AreaChart>
            
        </div>
    );
};

export default Statistics;