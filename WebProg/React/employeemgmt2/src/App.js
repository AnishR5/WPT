import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import {useState} from 'react';
import EmployeeTable from './components/EmployeeTable'

function App() {

  let [emparr,setemparr]=useState([{empid:1,ename:"Satish",salary:5000},{empid:2,ename:"Sanket",salary:7000},{empid:3,ename:"Pratik",salary:8000}])


  return (
    <div className="App">
      <Header></Header>
      <EmployeeTable arr={emparr}></EmployeeTable>
      
    </div>
  );
}

export default App;
