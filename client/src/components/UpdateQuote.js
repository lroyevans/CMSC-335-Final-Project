import React, { use, useState } from "react";
import QuoteQuerry from "./QuoteQuerry"
import QuoteEntry from "./QuoteEntry";

function updateData(quoteObj){
    let data =  quoteObj;
    console.log(data);
    let options ={
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('http://localhost:3001/quotes/', options);
}

function Question({finalSubmision}){
    const [questionNum, setQuestionNum] = useState(0);
    const [respValue, setRespValue] = useState(false);
    
   
    const submission = (event) =>{
        if(respValue){
            if(questionNum !=2){
                event.preventDefault();
                setQuestionNum(questionNum + 1);
            } else{
                finalSubmision();     
            }
        } else{
            event.preventDefault();
            setQuestionNum("FAILURE");
        }
    }

    const select = (event) =>{
        setRespValue(event.target.value);
    }
    const func = (e) =>{
        select(e);
    }
     switch(questionNum){
        case 0:
            return(
                <div>
                    <h1>What is your name?</h1>
                    <form onSubmit={(e) =>{submission(e)}}>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>Rick O'Connell</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>Mullan</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>Optimus Prime</label><br/>
                        <label><input type="radio" name="quest" value={true} onClick={func}/>Arthur King of the Britains</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>Batman</label><br/>
                        <button type="submit">I feel certain</button>
                    </form>
                </div>
            );
        case 1:
             return(
                <div>
                    <h1>What is your quest?</h1>
                    <form onSubmit={(e) =>{submission(e)}}>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>Hamunaptra</label><br/>
                        <label><input type="radio" name="quest" value={true} onClick={func}/>To seek the Holy Grail</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>To save my father and bring my family honor</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>To claim the Matrix of Leadership and save Cybertron</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>Rid Gotham of scum</label><br/>
                        <button type="submit">I feel certain</button>
                    </form>
                </div>
            );
        case 2:     
             return(
                <div>
                    <h1>What is the airspeed velocity of an unladen swallow?</h1>
                    <form onSubmit={(e) =>{submission(e)}}>
                        <label><input type="radio" name="quest" value={true} onClick={func}/>What do you mean, an African or European swallow?</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>11 meters/sec</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>40mph burst speed</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>faster than a galloping man</label><br/>
                        <label><input type="radio" name="quest" value={false} onClick={func}/>24 mph</label><br/>
                        <button type="submit">I feel certain</button>
                    </form>
                </div>
            );
        default:
            return (
                <div>
                    <h1>You fell to your untimly doom</h1>
                </div>
            )

    }
}

function UpdateQuoteManager(){
    const [selectQuote, setSelectQuote] = useState({});
    const [presentedChange, setPresentedChange] = useState({});
    const [renState, setRenState] = useState(0);

    const progressState = () =>{
        setRenState(renState + 1);
    }

    const updateSelectQuote = quoteObj => {
        setSelectQuote(quoteObj);
        setPresentedChange(quoteObj);
        progressState();
    }

    const updatePresentedChange = (event) => {
        event.preventDefault();
        if(event.target.className === "quoteInput"){
            setPresentedChange({quote: event.target.value, author: presentedChange.author, _id: presentedChange._id});
        } else{
            setPresentedChange({quote: presentedChange.quote, author: event.target.value, _id: presentedChange._id});
        }
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
                        <QuoteEntry changeFunc={(e) => updatePresentedChange(e)}/>
                        <button type="button" onClick={(e) =>{
                            e.preventDefault();
                            progressState();
                        }}>Submit</button>
                    </div>
            );
        case 2:
            return(
                    <div>
                        <button type="button" >Submit Change</button>
                        <h1>All who dare continue must face the Bridge of Death</h1>
                        <Question finalSubmision={updateData(presentedChange)}/>
                    </div>
            );
    }
}

export default UpdateQuoteManager;