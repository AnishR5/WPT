import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

class EmployeeTable extends React.Component{

    constructor(props){
        super(props);
        this.state={
            earr:[]
        }
    }

    componentDidMount(){
        this.setState({...this.state,earr:EmployeeService.getEmployee()})
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                    <table className="table table-dark">
            <thead>
            <tr>
            
            <th scope="col">Empid</th>
            <th scope="col">Ename</th>
            <th scope="col">Sal</th>
            </tr>
            </thead>
            <tbody>
            {this.state.earr.map((emp)=>(<tr key={emp.empid}>
                <td>{emp.empid}</td>
                <td>{emp.ename}</td>
                <td>{emp.sal}</td>
            </tr>))}
            </tbody>
            </table>

                    </div>
                </div>
                 
           
            </div>
        )
    }
}



export default EmployeeTable; 