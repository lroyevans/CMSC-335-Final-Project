import React, {useState} from "react";
import DiscountButtons from "./DiscountButtons";


function TravelGuide({location = "NYC", children}){
    const [nights, setNight] = useState(3)
    const [price, setPrice] = useState(200)
    const [vacancy, setVacancy] = useState(true)
    const [disc, setDisc] = useState(1)
    console.log(disc)
    return (<div>
        <h1>Welcome to my Travel Guide!</h1>
        <h2>You are currently traveling to {location}, your daily rate is {price} 
            and there {vacancy? "are" : "are not"} avaliable rooms!</h2>
        <h2>Your final cost is: {nights*price*disc}</h2>
        <DiscountButtons vacancy = {vacancy} setDisc = {setDisc} people = {2} />
        
        {children}
    </div>)
    
}

export default TravelGuide;