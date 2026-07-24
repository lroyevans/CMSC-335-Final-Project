import React, {Component} from 'react';

function ResultComponent(props){


    return (
        <div className="result">
           <h1>{props.display}</h1>
        </div>
    );
}


export default ResultComponent;