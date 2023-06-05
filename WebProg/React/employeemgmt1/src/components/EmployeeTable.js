import React, {useState} from 'react'

const EmployeeTable=(props)=>{

   
   let [myname,setmyname]=useState("");

   let addnewname=()=>{
    props.insertemp(myname);
    setmyname("")
   }

   let renderemp=props.empdata.map((name,index)=><tr key={index}><td>{name}</td></tr>);


    return (
        <div>
            <table border="2">
                <thead>
                    <tr>
                    <th>Employee Name</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {renderemp}
                </tbody>
            </table>
            <input type='text' name='nm' id='nm' value={myname} onChange={(event)=>{setmyname(event.target.value)}} ></input> <br></br>
            <input type='button' name='btn' id='btn' value="Insert Employee" onClick={addnewname}></input>
        </div>
    )
}

export default EmployeeTable;