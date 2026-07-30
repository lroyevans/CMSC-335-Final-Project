import React, { useState } from "react";
import QuoteQuerry from "./QuoteQuerry"
import QuoteEntry from "./QuoteEntry";
import Quote from "./Quote";
import BumiImg from "./Resources/Images/Boomy.png"

function delData(quoteObj){
    let data = quoteObj;
        let options ={
        method: 'delete',
        headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    console.log(data);
    fetch('http://localhost:3001/quotes/', options);
    
}

function DeleteQuoteManager(){
    const [selectQuote, setSelectQuote] = useState({});
    const [nameAtempt, setNameAtempt] = useState("");
    const [renState, setRenState] = useState(0);
    
    const updateSelectQuote = (quoteObj) => {
        setSelectQuote(quoteObj);
        setRenState(renState + 1);
    }

    const updateNameAtempt = (event) =>{
        event.preventDefault();
        setNameAtempt(event.target.value.toLowerCase());
    }

    const Delete = (event) =>{
        // event.preventDefault();
        delData(selectQuote);
    }
    switch(renState){
        case 0:
            return(
                <div>
                    <QuoteQuerry propFunc={updateSelectQuote}/>
                </div>
            );
        case 1:
            return(
                <div>
                    <form onSubmit={(e)=>{Delete(e)}}>
                        <img src={BumiImg} width="600rem" height="400rem"/>
                        <br/>
                        <Quote quote="What... is my name?" author="King Bumi"/>
                        <br/>
                        <input type="text" onChange={(e)=>updateNameAtempt(e)}/>
                        <button type="submit" disabled={nameAtempt !== "liam"}>Delete Quote</button>
                    </form>
                </div>
            );
    }
}

export default DeleteQuoteManager;