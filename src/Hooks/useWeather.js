// src/hooks/useWeather.js

import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const useWeather = (city) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!city) return;

        const getWeather = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );

                if (!response.ok) {
                    throw new Error("City not found");
                }

                const data = await response.json();

                setWeather(data);
            } catch (err) {
                setError(err.message);
                setWeather(null);
            } finally {
                setLoading(false);
            }
        };

        getWeather();
    }, [city]);

    return { weather, loading, error };
};

export default useWeather;