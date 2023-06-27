import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
     <Navbar title="Textutils" abouttextutils="About textUtils"/>
     <div className='container my-3'>
     <TextForm heading='Enter your text here to analyze'/>
     </div>

     
    </div>
    
  );
}

export default App;
