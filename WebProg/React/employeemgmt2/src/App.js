import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import {useState,useEffect} from 'react';
import EmployeeTable from './components/EmployeeTable'

function App() {

  let [emparr,setemparr]=useState([{empid:1,ename:"Satish",sal:5000},{empid:2,ename:"Sanket",sal:7000},{empid:3,ename:"Pratik",sal:8000}])

  let addEmp=(emp)=>{
    setemparr([...emparr,{empid:parseInt(emp.empid),ename:emp.ename,sal:parseInt(emp.sal)}]);
  }
  useEffect(()=>{
    console.log("in emparr useeffect hook")
     console.log(emparr) 
  },[emparr])
  return (
    <div className="App">
      <Header></Header>
      <EmployeeTable arr={emparr} insertEmp={addEmp}></EmployeeTable>
      
    </div>
  );
}

export default App;
