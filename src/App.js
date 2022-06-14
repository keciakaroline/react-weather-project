import TopCities from "./components/TopCities";
import FormCity from "./components/FormCity";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./components/app/Api";
import getFormattedWeatherData from "./components/app/Api";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

export default function App() {
  const [location, setLocation] = useState({ q: "Lisbon" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...location, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [location, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopCities setLocation={setLocation} />

      <FormCity
        setLocation={setLocation}
        units={units}
        setUnits={setUnits}
        city={city}
        setCity={setCity}
      />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}
      <Footer />
    </div>
  );
}
