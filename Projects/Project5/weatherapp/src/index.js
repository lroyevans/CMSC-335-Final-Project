import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherComponent from './Components/WeatherComponent';
import ForecastComp from './Components/WeekForecast';
import BestDay from './Components/BestDay';

let forecastInfo = [
{dayOfWeek: "Monday", temperature: "-79", condition: "cloudy", pollenCount:"High"},
{dayOfWeek: "Sunday", temperature: "72229", condition: "CloUDy", pollenCount:"Low"},
{dayOfWeek: "Tuesday", temperature: "7e9", condition: "suny", pollenCount:"moDeratE"},
{dayOfWeek: "Wednesday", temperature: "", condition: "suNNy", pollenCount:"low"},
{dayOfWeek: "Friday", temperature: "32", condition: "Rainy", pollenCount:"hiGH"},
{dayOfWeek: "Saturday", temperature: "80", condition: "slEEty", pollenCount:"lOw"},
{dayOfWeek: "Thursday", temperature: "100", condition: "ThunderStormy", pollenCount:"Hih"}
];

//component manager
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BestDay data={forecastInfo}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
