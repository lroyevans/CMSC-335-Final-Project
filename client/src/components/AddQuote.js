import React, { use, useState } from "react";
import QuoteEntry from "./QuoteEntry";

let quoteBuffer = [];
let remQuotes = [];

function formatInput(input){
    return input.toLowerCase().trim();
}

function AddQuote({submitFunc, resetFunc, disableState}){
    const [currQuote, setCurrQuote] = useState("");
    const [currAuthor, setCurrAuthor] = useState("");
    
    const updateInput = (event) =>{
        event.preventDefault();
        if(event.target.className === "quoteInput"){
            setCurrQuote(event.target.value);
        }else{
            setCurrAuthor(event.target.value);
        }
    }

    return(
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    submitFunc(e)}}>
                    <QuoteEntry changeFunc={updateInput}/>
                    <button type="reset" onClick={() => resetFunc(currQuote, currAuthor)} disabled={(currAuthor === "" || currQuote === "")}>+</button>
                    <button type="submit" disabled={disableState}>Submit Quotes</button>
                </form>
            </div>
        );
}

function AddQuoteGame({endGameFunc}){
    const [atempt, setAtempt] = useState("");
    const [guesses, setGuesses] = useState(quoteBuffer.length);
    const [flag, setFlag] = useState(true);

    const submitAtempt = (event) =>{
        event.preventDefault();
        let entry = quoteBuffer.find(element => formatInput(element.currQuote) === formatInput(atempt));
        
        if(entry){
            remQuotes.push(entry);
            quoteBuffer.filter(element => formatInput(element.currQuote) !== formatInput(atempt));
        }
        setAtempt("");
        setGuesses(guesses - 1);
        setFlag(true);
    }

    const endCheck = () =>{
        if(quoteBuffer.length === 0 || guesses <= 0){
            endGameFunc();
        }
    }

    const updateAtempt = (event) =>{
        event.preventDefault();
        setAtempt(event.target.value);
    }
    if(flag){
        setFlag(false);
        endCheck();
    }
    return(
        <div>
            <h1>NOT SO FAST</h1>
            <p>If your quotes are truly worthy of the Book of Quotes surly you still remember them.
                <br/>
               you have <strong>{guesses}</strong> atempt{guesses === 1? "": "s"} remaining!
            </p>
            <form>
                <input type="text" onChange={(e) => updateAtempt(e)}/>
                <button type="button" onClick={(e) => submitAtempt(e)}>Submit Attempt</button>
            </form>
        </div>
    );
}

function postData(){
    remQuotes.forEach(element => {
        let data =  {quote: element.currQuote, author: element.currAuthor};
        let options ={
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
        }
        fetch('http://localhost:3001/quotes/', options).then(); 
    });
}


function EndGame(){
    return(
        <div>
            {remQuotes.length === 0?
                <h1>You Failed to add ANY quotes to the Book of Quotes</h1>:
                <h1>Congratulations You added {remQuotes.length} quote{remQuotes.length > 1? "s": ""} to the Book of Quotes</h1>
            }
        </div>
    );
}

function AddQuoteManager(){
    const [stateNum, setStateNum] = useState(0);
    const [bufferedQuotes, setBufferedQuotes] = useState(0);

    const addToBuffer = (currQuote, currAuthor) =>{
        quoteBuffer.push({currQuote, currAuthor});
        setBufferedQuotes(bufferedQuotes + 1);
    }

    const updateStateNum = () => {
        setStateNum(stateNum + 1);
        if(stateNum === 1){
            postData();
        }
    }

    switch(stateNum){
        case 0:
            return(
            <div>
                <AddQuote submitFunc={updateStateNum} resetFunc={addToBuffer} disableState={bufferedQuotes === 0}/>
            </div>
        );
        case 1:
            return(
                <div>
                    <AddQuoteGame endGameFunc={updateStateNum}/>
                </div>
            );
        case 2:
            return(
                <div>
                    <EndGame/>
                </div>
            );
    }
}

export default AddQuoteManager;