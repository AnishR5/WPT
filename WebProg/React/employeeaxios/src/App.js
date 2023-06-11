import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/NavHeader';
import { Routes,Route,Navigate } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <NavHeader></NavHeader>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
        <Route path='/home' element={<HomeComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
