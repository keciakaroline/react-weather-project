import TopCities from "./components/TopCities";
import FormCity from "./components/FormCity";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";

export default function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
      <TopCities />
      <h1> Teste </h1>
      <FormCity />
      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  );
}
