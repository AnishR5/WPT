import EmployeeService from "../service/EmployeeService"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

const EmployeeForm=()=>{

    let navigate=useNavigate();
    let [formdetails,setformdetails]=useState({empid:"",ename:"",sal:""});

    let addemp=()=>{

        if(formdetails.empid==="" || formdetails.ename==="" || formdetails.sal==="")
        {
            alert("Fill the form")
        }
        else{
            EmployeeService.addEmp(formdetails);
            setformdetails({empid:"",ename:"",sal:""})
            navigate("/table")
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                <form>
  <div className="form-group">
    <label htmlFor="empid">Empid</label>
    <input
      type="text"
      className="form-control"
      id="empid"
      name="empid"
      value={formdetails.empid}
      onChange={(event)=>{setformdetails({...formdetails,empid:event.target.value})}}
    />
  </div>
  <div className="form-group">
    <label htmlFor="ename">ename</label>
    <input
      type="text"
      className="form-control"
      id="ename"
      name="ename"
      value={formdetails.ename}
      onChange={(event)=>{setformdetails({...formdetails,ename:event.target.value})}}
    />
  </div>
  <div className="form-group">
    <label htmlFor="sal">sal</label>
    <input
      type="text"
      className="form-control"
      id="sal"
      name="sal"
      value={formdetails.sal}
      onChange={(event)=>{setformdetails({...formdetails,sal:event.target.value})}}
    />
  </div>
  
  <button type="button" className="btn btn-primary" onClick={addemp}>
    Submit
  </button>
</form>
                </div>
            </div>
           


        </div>
    )

}

export default EmployeeForm;