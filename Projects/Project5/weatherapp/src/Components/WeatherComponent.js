import React from "react";
import ReactDOM from "react-dom";
import SunnyImg from "../Images/Sunny.jpg"
import Cloudyimg from "../Images/Cloudy.jpg"
import RainyImg from "../Images/Rainy.jpg"
import SleetyImg from "../Images/Sleety.jpg"
import ThunderStormyImg from "../Images/ThunderStormy.jpg"
import ErrorImg from "../Images/Error.png"

const condition = Object.freeze({
    SUNNY: "sunny",
    SUNIMG: "Sunny.jpg",
    CLOUDY: "cloudy",
    CLOUDIMG: "Cloudy.jpg",
    RAINY: "rainy",
    RAINIMG: "Rainy.jpg",
    SLEETY: "sleety",
    SLEETIMG: "Sleety.jpg",
    THUNDERSTORMY: "thunderstormy",
    STORMIMG: "ThunderStormy.jpg",
    ERRIMG: "Error.jpg"
});

const pollen = Object.freeze({
    HIGH: "high",
    MODERATE: "moderate",
    LOW: "low"
});

const day = Object.freeze({
    MONDAY: "monday",
    TUESDAY: "tuesday",
    WEDNESDAY: "wednesday",
    THURSDAY: "thursday",
    FRIDAY: "friday",
    SATURDAY: "saturday",
    SUNDAY: "sunday",
    DEFAULT: "wrongDay"
});

function formatProp(prop){
    prop = prop.toLowerCase();
    prop = prop.trim();
    return prop;
}

function lexCondition(con){
    switch(formatProp(con)){
        case condition.CLOUDY:
            return Cloudyimg;
        case condition.SUNNY:
            return SunnyImg;
        case condition.RAINY:
            return RainyImg;
        case condition.SLEETY:
            return SleetyImg;
        case condition.THUNDERSTORMY:
            return ThunderStormyImg;
        default:
            return ErrorImg;
    }
}

function lexDay(weekDay){
    weekDay = formatProp(weekDay);
    switch(weekDay){
        case day.MONDAY:
        case day.TUESDAY:
        case day.WEDNESDAY:
        case day.THURSDAY:
        case day.FRIDAY:
        case day.SATURDAY:
        case day.SUNDAY:
            weekDay = weekDay[0].toUpperCase() + weekDay.slice(1);
            return weekDay;
        default:
            return "ERROR";
    }
}

function lexPollen(poll){
    poll = formatProp(poll);
    switch(poll){
        case pollen.HIGH:
        case pollen.MODERATE:
        case pollen.LOW:
            return poll;
        default:
            return "ERROR";
    }
}

function lexTemp(temp){
    temp = temp.trim();
    if(temp.length != 0){
        let num = Number(temp);
        if(num || num === 0){
            return num;
        }
    }
    return "ERROR";
}

function WeatherComponent(props) {
    if(props.dayOfWeek === day.DEFAULT){
        return(
            <span/>
        )
    }
    console.log(lexCondition(props.condition));
    return ( 
        <div class="WeatherContainer">
            <h1>{lexDay(props.dayOfWeek)}</h1>
            <img src={lexCondition(props.condition)} alt={props.condition} width="75"></img>
            <br></br>
            <h2>{lexTemp(props.temperature)}</h2>
            <br></br>
            Pollen Count: {lexPollen(props.pollenCount)} 
        </div>
    );
}

export default WeatherComponent;