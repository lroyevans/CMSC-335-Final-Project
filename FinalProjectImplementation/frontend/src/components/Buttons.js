import React, { useState } from "react";
import renderState from "./Resources/RenderStates";

function Butttons({updateFunc, currState}){
    const func = (e) => {updateFunc(e)};

    return (
        <div>
        <h1>The Book of Quotes</h1>
        <button type="button" name={renderState.BOOK} onClick={func} disabled={currState === renderState.BOOK}>Quotes</button>
        <br/>
        <button type="button" name={renderState.DELETE} onClick={func} disabled={currState === renderState.DELETE}>Delete A Quote</button>
        <button type="button" name={renderState.ADD} onClick={func} disabled={currState === renderState.ADD}>Add Quotes</button>
        <button type="button" name={renderState.UPDATE} onClick={func} disabled={currState === renderState.UPDATE}>Update A Quote</button>  
        </div>
    );
}

export default Butttons;