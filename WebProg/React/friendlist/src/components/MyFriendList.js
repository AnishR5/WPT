import React,{component} from 'react';

class MyFriendList extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            names:["Kapil","Amit","Vishal","Rutvik","Anish","Kenil"]
        }
    }

    renderlist=()=>{
        return this.state.names.map((a,index)=><li key={index}>{a}</li>)
    }

    render(){
        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {this.renderlist()}
                </ul>
            </div>
        )
    }
}

export default MyFriendList;