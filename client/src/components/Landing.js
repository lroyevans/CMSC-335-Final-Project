import React, { useState } from "react";
import BookOfQuotes from "./BookOfQuotes";
import Butttons from "./Buttons"
import renderState from "./Resources/RenderStates";
import AddQuote from "./AddQuote";
import UpdateQuote from "./UpdateQuote";
import DeleteQuote from "./DeleteQuote";

function Landing(){
    const [renState, setRenState] = useState(renderState.BOOK);
    
    const updateRenderState = (event) =>{
        event.preventDefault();
        setRenState(event.target.name);
    }

    switch(renState){
        case renderState.BOOK: 
            return(
                <div className="mainContain">
                    <Butttons updateFunc={updateRenderState} currState={renState}/>
                    <BookOfQuotes/>
                </div>
            );
        case renderState.DELETE:
            return(
                <div className="mainContain">
                    <Butttons updateFunc={updateRenderState} currState={renState}/>
                    <DeleteQuote/>
                </div>
            );
        case renderState.ADD:
            return(
                <div className="mainContain">
                    <Butttons updateFunc={updateRenderState} currState={renState}/>
                    <AddQuote/>
                </div>
            );
        case renderState.UPDATE:
            return(
                <div className="mainContain"> 
                    <Butttons updateFunc={updateRenderState} currState={renState}/>
                    <UpdateQuote/>
                </div>
            );
        default:
            return(
                <h1>DEFUALT</h1>
            );
    }
}
export default Landing;