import logo from './logo.svg';
import './App.css';
import MyHeader from './components/MyHeader';
import CounterComponent from './components/CounterComponent';

function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <h1>Hello World</h1>
      <CounterComponent></CounterComponent>
    </div>
  );
}

export default App;
