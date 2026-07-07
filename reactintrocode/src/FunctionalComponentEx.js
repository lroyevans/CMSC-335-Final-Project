import React from 'react'

function FunctionalComponentEx (props){


    return (
        <div>
            <h1>Hello</h1>
            <h1>{() => {
        if(props.num >0){
            return <h2>"positive"</h2>;
        }
        return <h2>"non-positive"</h2>;
    }}</h1>
        </div>
    );
}

export default FunctionalComponentEx;