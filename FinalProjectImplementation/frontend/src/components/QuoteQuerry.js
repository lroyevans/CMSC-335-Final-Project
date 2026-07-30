import React, { useState, useEffect } from "react";
import "../CSS/QuoteEntry.css";

function QuoteQuery({propFunc}){
    const [ary, setAry] = useState([]);
    const [target, setTarget] = useState("");

    const updateTarget =(event) =>{
        event.preventDefault();
        setTarget(event.target.value);
    }

    const getAllData = ()=>{
            fetch('http://localhost:3001/quotes/')
            .then(res => res.json())
            .then(data=>{setAry(data.info)});
    }

    useEffect(() => {
        getAllData();
    }, []);

    const getData = (quote)=>{
        fetch(`http://localhost:3001/quotes/${quote}`)
        .then(res => res.json())
        .then(data=>{propFunc(data.info[0])});
    }

    const func = (e) => {
        e.preventDefault();
        getData(target);
    };

    return(
        <div>
            <form onSubmit={func}>
                <br/>
                <input type="text" list="quote-master-list" onChange={(e) => updateTarget(e)} placeholder="Enter Quote" className="quoteInput"/>
                <br/>
                <datalist id="quote-master-list">
                    {
                        ary.map((element, index) => (
                            <option value={element.quote} key={index}/>
                    ))
                }
                </datalist>
                <button type="submit">Confirm Quote</button>
            </form>
        </div>
    );
}

export default QuoteQuery;