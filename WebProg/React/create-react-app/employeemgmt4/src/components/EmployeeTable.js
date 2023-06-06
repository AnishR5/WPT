import React,{Component} from 'react'
import EmployeeService from '../service/EmployeeService';
import EmployeeForm from './EmployeeForm';


class EmployeeTable extends React.Component{

    constructor(props){
        super(props);
        this.state={
            earr:[],
            searcharr:[],
            searchtext:""
        }
    }

    componentDidMount(){
        this.setState({...this.state,earr:EmployeeService.getEmployees(),searcharr:EmployeeService.getEmployees()})
        
    }

    // getData=()=>{
    //     this.setState({...this.state,earr:EmployeeService.getEmployees(),searcharr:EmployeeService.getEmployees()})
        
    // }


    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Empid </th>
                            <th scope="col">Ename</th>
                            <th scope="col">Salary</th>                            
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.searcharr.map((emp)=><tr key={emp.empid}>
                                <td>{emp.empid}</td>
                                <td>{emp.ename}</td>
                                <td>{emp.sal}</td>                                
                            </tr>)}
                        </tbody>
                        </table>

                        <button type="button" name="btn" id="btn" className="btn btn-success">Add new Employee</button>
                        <input type="text" name="nm" id="nm" 
                            value={this.state.searchtext}
                            onChange={(event)=>{this.setState({...this.state,searchtext:event.target.value})}}
                            />

                    </div >
                    

                </div>
            </div>
        )
    }
}

export default EmployeeTable;