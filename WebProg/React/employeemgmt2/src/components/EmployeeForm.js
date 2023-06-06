import {useState} from 'react';

const EmployeeForm=(props)=>{
    let [formdetails,setformdetails]=useState({empid:'',ename:'',sal:''})

    // if(formdetails.empid==="" || formdetails.ename === ''|| formdetails.salary === ''){
    //     alert("pls fill all the values");
    // }

    let insertData=()=>{
      if(formdetails.empid==="" || formdetails.ename==="" || formdetails.sal==="")
      {
        alert("pls fill all the values");
      }
      else{
        props.adddata(formdetails);
        setformdetails({empid:"",ename:"",sal:""})
      }
    }

    return (
        <div>
            <form>
  <div class="form-group">
    <label for="empid">Employee id</label>
    <input type="text" class="form-control" id="empid"  name='empid' value={formdetails.empid} onChange={(event)=>{setformdetails({...formdetails,empid:event.target.value})}}> </input>
    
  </div>
  <div class="form-group">
    <label for="ename">Emp Name</label>
    <input type="password" class="form-control" id="ename" name='ename' value={formdetails.ename} onChange={(event)=>{setformdetails({...formdetails,ename:event.target.value})}} ></input>
  </div>
  <div class="form-group">
    <label for="sal">Salary</label>
    <input type="password" class="form-control" id="sal" name='sal' value={formdetails.sal} onChange={(event)=>{setformdetails({...formdetails,sal:event.target.value})}}></input>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={insertData}>Add new Employee</button>
</form>
        </div>
    )
}

export default EmployeeForm;