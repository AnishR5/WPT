import {useState} from 'react';

const EmployeeForm=(props)=>{
    let [formdetails,setformdetails]=useState({empid:'',ename:'',salary:''})

    // if(formdetails.empid==="" || formdetails.ename === ''|| formdetails.salary === ''){
    //     alert("pls fill all the values");
    // }

    return (
        <div>
            <form>
  <div class="form-group">
    <label for="empid">Employee id</label>
    <input type="text" class="form-control" id="empid" aria-describedby="emailHelp" placeholder="Enter empid"> </input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
   
  </div>
  <div class="form-group">
    <label for="ename">Emp Name</label>
    <input type="password" class="form-control" id="ename" placeholder="Emp name"></input>
  </div>
  <div class="form-group">
    <label for="sal">Salary</label>
    <input type="password" class="form-control" id="sal" placeholder="Salary"></input>
  </div>
  
  <button type="submit" class="btn btn-primary">Add new Employee</button>
</form>
        </div>
    )
}

export default EmployeeForm;