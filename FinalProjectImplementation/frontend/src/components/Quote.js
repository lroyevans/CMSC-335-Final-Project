import React, { useState } from "react";
import "../CSS/Quote.css"

function Quote({quote = "def Quote", author = "def Author"}){

    return(
        <span className="quoteContainer">
            "{quote}" - <em>{author}</em>
        </span>
    );
}

export default Quote;