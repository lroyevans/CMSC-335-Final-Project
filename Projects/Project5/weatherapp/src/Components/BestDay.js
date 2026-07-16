import React, { useState } from "react";
import ReactDOM from "react-dom";
import ForecastComp from "./WeekForecast";

const tempZone = Object.freeze({
    COLD: "Cold",
    WARM: "Warm",
    HOT: "Hot"
});

function determinTempZone(temp){
    if(temp <= 32){
        return tempZone.COLD;
    } else if(temp > 70){
        return tempZone.HOT;
    } else if(Number(temp)){
        return tempZone.WARM;
    }
}

function findBestDays(zone, data){
    let ary = [];
    data.forEach(element =>{
        if(determinTempZone(element.temperature) === zone){
            ary.push(element);
        }
    })
    return ary;
}

const headingClass = "favTemp";
const divClass = "favContainer";
const buttonClass = "buttContainer"
function BestDay (props){
    const [bestDays, setBestDays] = useState([]);
    if(bestDays.length === 0){
        return(
            <div class = {divClass}>  
                <h1 class = {headingClass}>What is your favorite Temperature?</h1>
                <div class = {buttonClass}>
                    <button class ={tempZone.COLD} onClick={() => setBestDays(findBestDays(tempZone.COLD, props.data))}>Cold</button>
                    <button class ={tempZone.WARM} onClick={() => setBestDays(findBestDays(tempZone.WARM, props.data))}>Warm</button>
                    <button class ={tempZone.HOT} onClick={() => setBestDays(findBestDays(tempZone.HOT, props.data))}>Hot</button>
                </div>
                <h2>No Applicable Days</h2>
                <ForecastComp data={props.data}/>
            </div>
        );
    }
    return(
        <div class = {divClass}>
            <h1 class = {headingClass}>What is your favorite Temperature?</h1>
            <div class = {buttonClass}>
                <button class ={tempZone.COLD} onClick={() => setBestDays(findBestDays(tempZone.COLD, props.data))}>Cold</button>
                <button class ={tempZone.WARM} onClick={() => setBestDays(findBestDays(tempZone.WARM, props.data))}>Warm</button>
                <button class ={tempZone.HOT} onClick={() => setBestDays(findBestDays(tempZone.HOT, props.data))}>Hot</button>
            </div>
            <h2>Favorite Days</h2>
            <ForecastComp data={bestDays}/>
        </div>
    );
}

export default BestDay; 