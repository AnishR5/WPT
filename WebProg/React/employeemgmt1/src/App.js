import React,{Component} from 'react';
import EmployeeTable from './components/EmployeeTable'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      arr:["Sanket","Satish","Pratik"]
    }
  }

  addemp=(nm)=>{
    this.setState({...this.state,arr:[...this.state.arr,nm]})
  }

  render(){

    return(
      <div>
        <h1>Hello World!!!</h1>
        <EmployeeTable empdata={this.state.arr} insertemp={this.addemp}></EmployeeTable>

      </div>
    )
  }
}

export default App;