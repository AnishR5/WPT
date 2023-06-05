import React,{Component} from 'react'
import EmployeeForm from './EmployeeForm'

class EmployeeTable extends React.Component{

    constructor(props){
        super(props);
        this.state={
            earr:[...props.arr]
        };
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Empid</th>
                            <th scope="col">Emp Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Action</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.arr.map((emp)=>(    // use () and  not {}
                                <tr key={emp.empid}>
                                <td>{emp.empid}</td>
                                <td>{emp.ename}</td>
                                <td>{emp.salary}</td>
                                <td><button type="button" class="btn btn-link">Edit</button>
                                <button type="button" class="btn btn-link">Delete</button>  
                                </td>
                            </tr>
                        ))}
                            
                        </tbody>

                    </table>
                    <div className='col-sm-12 col-md-6'>
                        <EmployeeForm></EmployeeForm>
                    </div>

                    </div>
                     
                </div>

            </div>
        )
    }
}

export default EmployeeTable;