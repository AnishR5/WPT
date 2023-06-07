import logo from './logo.svg';
import './App.css';
import NavHeader from './components/NavHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/HomeComponent';
import {Routes,Route,Navigate} from 'react-router-dom'
import EmployeeTable from './components/EmployeeTable'; 
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
      
      <NavHeader></NavHeader>
      <Routes>
          <Route path='/' element={<Navigate replace to='/home'></Navigate>}></Route>
          <Route path='/home' element={<HomeComponent/>}></Route>
          <Route path='/table' element={<EmployeeTable/>}></Route>
          <Route path='/form' element={<EmployeeForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
