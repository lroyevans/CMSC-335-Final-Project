import React from 'react';

class CCEX extends React.Component{
    constructor(props){
        super(props);
        console.log(props.word);
    }
    process(val){
        if(val >0){
            return "positive";
        }
        return "non-positive";
    }

    render(){
          return (
        <div>
            <h1>Hello</h1>
            <h1>{this.process(this.props.num)}</h1>
            <h2>{this.props.word}</h2>
        </div>
    );
    }
}

export default CCEX;