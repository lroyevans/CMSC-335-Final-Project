import React, {useState} from "react";

function DiscountButtons({vacancy, setDisc}){
    return(
        <div>
            <button disabled = {!vacancy} name  = "aarp" onClick={() => setDisc(.7)}>AARP</button>
            <button disabled = {!vacancy} name  = "firstresp" onClick={() => setDisc(.8)}>First Responder</button>
            <button disabled = {!vacancy} name  = "govnt" onClick={() =>setDisc(.85) } >Government</button>
        </div>
    )

}

export default DiscountButtons;