import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router'
import useWeather from '../../Hooks/useWeather';
import WeatherUI from '../../components/WeatherUI/WeatherUI';

const Home = () => {
    const { searchTerm } = useOutletContext()
    const { weather } = useWeather(searchTerm)
    // console.log(weather?.weather[0]?.description)
    return (
        <div>
            <WeatherUI data={weather}></WeatherUI>
        </div>
    )
}

export default Home