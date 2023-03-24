import logo from './logo.svg';
import './App.css';
import Component from './Component/Greet'
import  Welcome from "./Component/Welcome";
import Hello from "./Component/Hello";
function App() {
  return (
    <div className="App">
      <Component name="Jenishkumar" heroName="Batman" />
      <Component name="Viralkumar" />
      <Component name="Mayurkumar" />
      <Component/>
      <Component/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
