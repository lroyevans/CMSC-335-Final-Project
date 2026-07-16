import React from "react";
import ReactDOM from "react-dom";
import WeatherComponent from './WeatherComponent';

const day = Object.freeze({
    MONDAY: "monday",
    TUESDAY: "tuesday",
    WEDNESDAY: "wednesday",
    THURSDAY: "thursday",
    FRIDAY: "friday",
    SATURDAY: "saturday",
    SUNDAY: "sunday"
});

function formatProp(prop){
    prop = prop.toLowerCase();
    prop = prop.trim();
    return prop;
}

const defObj = {
    dayOfWeek: "wrongDay",
    condition: "",
    temperature: "",
    pollenCount: ""
}

function findDay(dayName, forecast){
    let ret =  forecast.find(element => formatProp(element.dayOfWeek) === dayName);
    if(ret){
        return ret;
    }else{
        return defObj;
    }
}

function ForecastComp(props){
    let mon = findDay(day.MONDAY, props.data);
    let tues = findDay(day.TUESDAY, props.data);
    let wed = findDay(day.WEDNESDAY, props.data);
    let thurs = findDay(day.THURSDAY, props.data);
    let fri = findDay(day.FRIDAY, props.data);
    let sat = findDay(day.SATURDAY, props.data);
    let sun = findDay(day.SUNDAY, props.data);
    return(
        <div class = "forecastContainer">
            <WeatherComponent dayOfWeek={mon.dayOfWeek} condition={mon.condition} pollenCount={mon.pollenCount} temperature={mon.temperature}/>
            <WeatherComponent dayOfWeek={tues.dayOfWeek} condition={tues.condition} pollenCount={tues.pollenCount} temperature={tues.temperature}/>
            <WeatherComponent dayOfWeek={wed.dayOfWeek} condition={wed.condition} pollenCount={wed.pollenCount} temperature={wed.temperature}/>
            <WeatherComponent dayOfWeek={thurs.dayOfWeek} condition={thurs.condition} pollenCount={thurs.pollenCount} temperature={thurs.temperature}/>
            <WeatherComponent dayOfWeek={fri.dayOfWeek} condition={fri.condition} pollenCount={fri.pollenCount} temperature={fri.temperature}/>
            <WeatherComponent dayOfWeek={sat.dayOfWeek} condition={sat.condition} pollenCount={sat.pollenCount} temperature={sat.temperature}/>
            <WeatherComponent dayOfWeek={sun.dayOfWeek} condition={sun.condition} pollenCount={sun.pollenCount} temperature={sun.temperature}/>
        </div>
    )
}

export default ForecastComp;