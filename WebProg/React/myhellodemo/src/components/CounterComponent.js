import React,{Component} from 'react';

class CounterComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={count:0}
    }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    
    decrement=()=>{
        if(this.state.count>0)
        {
            this.setState({count:this.state.count-1})
        }
        else 
            this.setState({count:0});
    }

    reset=()=>{
        this.setState({count:0})
    }

    render(){
        return(
            <div>
                <h1>Hello from Counter Component</h1>
                <h3>you clicked {this.state.count} </h3>
                <button type='button' name='btn' value="btn" onClick={this.increment}>Increment Counter</button> &nbsb;&nbsb;&nbsb;
                <button type='button' name='btn' value="btn" onClick={this.decrement}>Decrement Counter</button>  &nbsb;&nbsb;&nbsb;
                <button type='button' name='btn' value="btn" onClick={this.reset}>Reset Counter</button>    
            </div>
        )
    }
}

export default CounterComponent;