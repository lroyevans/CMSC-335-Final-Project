import React, { useState, useEffect } from "react";
import Quote from "./Quote";


//just a display, does need to read from schema/ master list
function BookOfQuotes(){
    const [ary, setAry] = useState([]);

    let getData = ()=>{
        fetch('http://localhost:3001/quotes/')
        .then(res => res.json())
        .then(data=>{setAry(data.info)});
    }

    useEffect(() => {
        getData();
    }, []);


    return(
            <div className="Book">
                {
                    ary.map((element, index) => (
                        <Quote quote={element.quote} author={element.author} key={index}/>
                    ))
                }
            </div>
        );


}

export default BookOfQuotes;