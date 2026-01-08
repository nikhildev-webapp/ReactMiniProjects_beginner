import React, { useState } from "react";

const WeatherApp = () => {
    // Static weather data
    const weatherData = {
        Sunny: {
            temp: "28°C",
            condition: "Sunny",
            details: "Clear skies and high UV. Perfect for outdoor activities.",
            color: "bg-yellow-100",
            icon: "☀️"
        },
        Rainy: {
            temp: "18°C",
            condition: "Rainy",
            details: "Heavy rainfall expected. Don't forget your umbrella!",
            color: "bg-blue-100",
            icon: "🌧️"
        },
        Cloudy: {
            temp: "22°C",
            condition: "Cloudy",
            details: "Overcast with mild winds. A bit cooler than usual.",
            color: "bg-gray-100",
            icon: "☁️"
        }
    };

    const [selectedWeather, setSelectedWeather] = useState("");

    const handleChange = (e) => {
        setSelectedWeather(e.target.value);
    };

    const currentData = weatherData[selectedWeather];

    return (
        <div className="flex flex-col items-center justify-center p-10 font-sans">
            <h1 className="text-2xl font-bold mb-4">Weather Info</h1>
            
            {/* Dropdown Selector */}
            <select 
                onChange={handleChange} 
                className="border p-2 rounded mb-6 cursor-pointer"
                defaultValue=""
            >
                <option value="" disabled>Choose Weather</option>
                <option value="Sunny">Sunny</option>
                <option value="Rainy">Rainy</option>
                <option value="Cloudy">Cloudy</option>
            </select>

            {/* Display Card */}
            {currentData ? (
                <div className={`p-6 rounded-lg shadow-lg text-center w-64 ${currentData.color}`}>
                    <div className="text-5xl mb-2">{currentData.icon}</div>
                    <h2 className="text-xl font-bold">{currentData.condition}</h2>
                    <p className="text-3xl font-semibold my-2">{currentData.temp}</p>
                    <p className="text-sm text-gray-700">{currentData.details}</p>
                </div>
            ) : (
                <p className="text-gray-500">Please select a weather condition to see details.</p>
            )}
        </div>
    );
};

export default WeatherApp;
