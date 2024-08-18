import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { ContextErrorText, ContextLocation } from '../App'
import { weatherDataProps } from '../types/weatherDataProps'
import ErrorText from './ErrorText'
import Searchbar from './Searchbar'
import CenteredText from './CenteredText'
import TemperatureText from './TemperatureText'
import MarginText from './MarginText'
import { useScreenWidth } from '../hooks/useScreenWidth'

const API_KEY = process.env.REACT_APP_API_KEY

const Canvas = () => {
    const contextLocation = useContext(ContextLocation)
    if (!contextLocation) {
        throw new Error(
            'ContextLocation must be used within a ContextLocation.Provider'
        )
    }
    const [location, setLocation] = contextLocation

    const contextErrorText = useContext(ContextErrorText)
    if (!contextErrorText) {
        throw new Error(
            'ContextErrorText must be used within a ContextErrorText.Provider'
        )
    }
    const [errorText, setErrorText] = contextErrorText

    const screenWidth = useScreenWidth()

    const [weekday, setWeekday] = useState<
        | 'Sunday'
        | 'Monday'
        | 'Tuesday'
        | 'Wednesday'
        | 'Thursday'
        | 'Friday'
        | 'Saturday'
        | null
    >(null)
    const [weatherData, setWeatherData] = useState<weatherDataProps | null>(
        null
    )

    const currentLocation = useRef(location)

    useEffect(() => {
        if (weatherData) {
            const dayIndex = new Date(
                weatherData.location.localtime.split(' ')[0]
            ).getDay()
            const weekdays: (
                | 'Sunday'
                | 'Monday'
                | 'Tuesday'
                | 'Wednesday'
                | 'Thursday'
                | 'Friday'
                | 'Saturday'
            )[] = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ]
            setWeekday(
                /^\d{4}-\d{2}-\d{2}$/.test(
                    weatherData.location.localtime.split(' ')[0]
                )
                    ? weekdays[dayIndex]
                    : null
            )
        } else setWeekday(null)
    }, [weatherData])

    const fetchData = useCallback(async () => {
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${currentLocation.current}&aqi=yes`

        try {
            const response = await fetch(url)
            if (response.status === 400) {
                setErrorText(
                    `Oooops! No valid location has been found for '${currentLocation.current}'!`
                )
                setWeatherData(null)
                sessionStorage.removeItem('weather-app-location')
                throw new Error(
                    `No valid location has been found for '${currentLocation.current}'`
                )
            } else if (response.status !== 200)
                throw new Error(
                    `An error occured while fetching the current weather data: ${response.status}`
                )
            const data = await response.json()
            if (data) {
                setErrorText('')
                setWeatherData(data)
            }
        } catch (e: any) {
            console.error(e)
        }
    }, [setErrorText])

    const handleClick = () => {
        const formattedLocation =
            location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()
        setLocation(formattedLocation)
        sessionStorage.setItem('weather-app-location', formattedLocation)
        currentLocation.current = formattedLocation

        fetchData()
    }

    const handleKeyDownButton = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleClick()
        }
    }

    const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('weather-app-location')) fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (weatherData && currentLocation.current) {
            const timer = setInterval(() => {
                fetchData()
            }, 300000)

            return () => {
                clearInterval(timer)
            }
        }
    }, [fetchData, weatherData])

    return (
        <div
            className={`flex flex-col mx-auto h-fit bg-zinc-50 text-blue-950 rounded-lg w-full max-w-96 ${
                screenWidth.includes('LANDSCAPE') ? 'm-auto' : 'mt-8'
            }`}
        >
            <Searchbar
                handleClick={handleClick}
                handleKeyDownButton={handleKeyDownButton}
                handleKeyDownInput={handleKeyDownInput}
            />
            {errorText && <ErrorText />}
            {weatherData && (
                <div className="flex flex-col px-4 py-2">
                    <div className="flex flex-row gap-1 flex-wrap justify-center">
                        <span className="text-base lg:text-lg">
                            {weatherData.location.name + ','}
                        </span>
                        <span className="text-base lg:text-lg">
                            {weatherData.location.region + ','}
                        </span>
                        <span className="text-base lg:text-lg">
                            {weatherData.location.country}
                        </span>
                    </div>
                    {weekday && <MarginText content={weekday} />}
                    <MarginText content={weatherData.location.localtime} />
                    <div className="grid grid-cols-3 gap-2 mt-2 place-items-center text-center">
                        <TemperatureText content={weatherData.current.temp_c} />
                        <Icon type={weatherData.current.condition.text} />
                        <span className="flex flex-row flex-wrap justify-center text-center items-center gap-x-1">
                            <span>feels like</span>
                            <TemperatureText
                                content={weatherData.current.feelslike_c}
                            />
                        </span>
                    </div>
                    <div className="flex m-auto pb-2 text-lg lg:text-xl font-bold break-all text-center">
                        {weatherData.current.condition.text}
                    </div>
                    <div className="grid grid-cols-2 place-items-center">
                        <Icon type="Humidity" />
                        <Icon type="Wind" />
                        <CenteredText
                            content={weatherData.current.humidity}
                            text="Humidity"
                            unit="%"
                        />
                        <CenteredText
                            content={weatherData.current.wind_kph}
                            text="Wind Strength"
                            unit="km/h"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Canvas
