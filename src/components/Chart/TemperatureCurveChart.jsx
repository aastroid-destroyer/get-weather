import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

const TemperatureCurveChart = ({ weather }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = [
        { name: 'Min', temp: weather?.main?.temp_min },
        { name: 'Current', temp: weather?.main?.temp },
        { name: 'Feels Like', temp: weather?.main?.feels_like },
        { name: 'Max', temp: weather?.main?.temp_max }
    ];

    return (
        <div className="w-full h-[300px] p-4 rounded-xl">
            <div className="mb-2">
                <h2 className="text-xl font-bold text-gray-800">{weather?.name}</h2>
                <p className="text-sm text-gray-500">Temperature Comparison</p>
            </div>

            <ResponsiveContainer width="100%" height="85%">
                <LineChart
                    data={data}
                    layout={isMobile ? "vertical" : "horizontal"}
                    margin={isMobile ? { top: 5, right: 30, left: 20, bottom: 5 } : { top: 5, right: 5, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={!isMobile} vertical={isMobile} stroke="#eee" />

                    {isMobile ? (
                        <>
                            <XAxis type="number" unit="°C" hide />
                            <YAxis dataKey="name" type="category" width={80} axisLine={false} tickLine={false} />
                        </>
                    ) : (
                        <>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis unit="°C" axisLine={false} tickLine={false} />
                        </>
                    )}

                    <Tooltip
                        cursor={{ strokeDasharray: '3 3' }}
                        formatter={(value) => [`${value}°C`, 'Temp']}
                    />

                    <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#f59e0b"
                        strokeWidth={3}
                        dot={{ r: 6, fill: '#f59e0b', strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 8 }}
                        animationDuration={1000}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TemperatureCurveChart;