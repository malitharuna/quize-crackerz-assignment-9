import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rechart = ({question}) => {
    // const {name, total} = question;
    console.log(question);
    return (
        <div>
            <LineChart  
                width={500}
                height={300}
                data={question}
                >
                <Line type="monotone" dataKey="course.total" stroke="#82ca9d" /> 
                <XAxis dataKey="name" />
                <YAxis />  
                <Tooltip /> 
            </LineChart>
        </div>
    );
};

export default Rechart;