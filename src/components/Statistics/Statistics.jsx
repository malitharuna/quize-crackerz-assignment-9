import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rechart = () => {
    const topics = useLoaderData();
    // const {name, total} = question;
    const {id, name, total} = topics.data
    console.log(topics.data);
    return (
        <div >
            <LineChart style={{backgroundColor:'lightcyan', margin: '0 auto', padding:'20px'}} 
                width={500}
                height={300}
                data={topics.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                     <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    /> 
            </LineChart>

            <h3>Charts: Web Development Courses Question chart </h3>
        </div>
    );
};

export default Rechart;