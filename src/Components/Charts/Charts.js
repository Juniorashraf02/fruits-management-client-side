import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import UseItems from './../UseItems/UseItems';


const Charts = () => {
    const [products] = UseItems([]);
    return (
        <div className="my-40">
            <h1 className="text-2xl text-violet-400 font-semibold my-20 ">Items Analysis</h1>
            <ResponsiveContainer>
            <div className="container justify-center md:flex items-center gap-5">
                
                <AreaChart className="w-1/2" width={350} height={250} data={products}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="price" />
                    <YAxis dataKey="" />
                    <CartesianGrid strokeDashrray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="name" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    <Area type="monotone" dataKey="quantity" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
                <div className="text-justify text-xl p-5 md:text-3xl text-violet-500 md:w-1/2">
                    <p>See our items summary. They contains the info about our products's name, price, quantity. This will help you guys a lot!</p>
                </div>
            </div>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;