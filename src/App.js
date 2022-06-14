import React, { useState, useEffect } from "react";
//import Weather from "./components/Weather";
import "./components/styles/App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("Lisbon");
  const [inputCity, setInputCity] = useState("");
  const [country, setCountry] = useState("PT");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      feels: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function searchCity() {
    const apiKey = "ce9e9a1384d8ee7b166d7542086e2fdc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  // use effect for every time we change city
  useEffect(() => {
    saveLocalCity();
  }, [city]);

  //save in the browser
  const saveLocalCity = () => {
    localStorage.setItem("city", JSON.stringify(city));
  };

  const getLocalCity = () => {
    if (localStorage.getItem("city") === null) {
      localStorage.setItem("city", JSON.stringify([]));
    } else {
      let cityLocal = JSON.parse(localStorage.getItem("city"));
      setCity(cityLocal);
    }
  };

  if (weatherData.ready) {
    return (
      <div className="App">
        <Form
          inputCity={inputCity}
          setInputCity={setInputCity}
          city={city}
          setCity={setCity}
          weatherData={weatherData}
          setWeatherData={setWeatherData}
          country={country}
          setCountry={setCountry}
        />
        <ListContainer city={city} setCity={setCity} />
        <Footer />
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
