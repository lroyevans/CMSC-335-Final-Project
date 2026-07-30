import React, { use, useState } from "react";
import "../CSS/QuoteEntry.css";

function QuoteEntry({changeFunc}){
    const func = (e) => changeFunc(e);
    return(
        <div>
            <fieldset>
                <br/>
                <input type="text" className="quoteInput" onChange={func} placeholder="Enter Quote"/>
                <input type="text" className="authorInput" onChange={func} placeholder="Enter Author"/>
                <br/>
            </fieldset>
        </div>
    );
}

export default QuoteEntry;