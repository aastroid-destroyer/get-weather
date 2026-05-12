import React from 'react';
import TemperatureCurveChart from '../Chart/TemperatureCurveChart';

const WeatherUI = ({ data }) => {
    return (
        <div className="p-8 min-h-screen font-sans text-gray-800">
            <div className="max-w-8xl mx-auto">

                {/* Top Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                    {/* Main Weather Card */}
                    <div className="relative overflow-hidden bg-orange-100 rounded-3xl p-8 h-64 flex flex-col justify-between shadow-sm">
                        <div className="z-10">
                            <p className="text-sm font-semibold opacity-70">Weather</p>
                            <h2 className="text-4xl font-bold mt-1">
                                {Math.round(data?.main?.temp)}°C
                                <span className="text-lg font-normal ml-2 opacity-60">
                                    {Math.round(data?.main?.temp_max)}°C
                                </span>
                            </h2>
                            <p className="capitalize mt-1">{data?.weather?.[0]?.description}</p>
                        </div>

                        {/* Stats Row */}
                        <div className="flex gap-2 z-10">
                            <div className="bg-slate-900 text-white p-3 rounded-2xl flex-1">
                                <p className="text-xs opacity-60">Pressure</p>
                                <p className="font-bold">{data?.main?.pressure}mb</p>
                            </div>
                            <div className="bg-lime-300 p-3 rounded-2xl flex-1">
                                <p className="text-xs opacity-70">Visibility</p>
                                <p className="font-bold">{(data?.visibility / 1000)?.toFixed(1)} km</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-2xl flex-1">
                                <p className="text-xs opacity-70">Humidity</p>
                                <p className="font-bold">{data?.main?.humidity}%</p>
                            </div>
                        </div>

                        {/* Decorative Sun (Simulating image_8d810b.jpg) */}
                        <div className="absolute -right-10 -top-10 w-48 h-48 bg-orange-400 rounded-full blur-xl opacity-40"></div>
                    </div>

                    {/* Wind & Speed Card */}
                    <div className="bg-sky-100 rounded-3xl p-8 h-64 relative shadow-sm">
                        <p className="text-sm font-semibold opacity-70">Wind Conditions</p>
                        <div className="mt-4">
                            <h2 className="text-5xl font-bold">{data?.wind?.speed} <span className="text-xl">m/s</span></h2>
                            <p className="opacity-60 mt-1">Wind Degree: {data?.wind?.deg}°</p>
                        </div>

                        {/* Wind Indicator Slider */}
                        <div className="mt-12">
                            <div className="w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full relative">
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 border-2 border-white rounded-full"
                                    style={{ left: `${Math.min((data?.wind?.speed / 15) * 100, 100)}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-xs mt-2 opacity-50">
                                <span>Calm</span>
                                <span>Breezy</span>
                                <span>Hazardous</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold mb-8">How's the temperature today?</h3>

                        {/* Simplified Chart Area */}

                        <TemperatureCurveChart weather={data}></TemperatureCurveChart>
                    </div>

                    {/* Location Summary */}
                    <div className="w-full md:w-64 bg-lime-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
                        <div>
                            <p className="font-bold text-lg">{data?.name}, {data?.sys?.country}</p>
                            <p className="text-sm opacity-60">Lat: {data?.coord?.lat} <br /> Lon: {data?.coord?.lon}</p>
                        </div>
                        <div className="mt-8">
                            <p className="text-4xl font-black">{Math.round(data?.main?.temp)}°C</p>
                            <p className="font-medium opacity-70 capitalize">{data?.weather?.[0]?.main}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeatherUI;

