import logo from './logo.svg';
import './App.css';
import Component from './Component/Greet'
import  Welcome from "./Component/Welcome";
import Hello from "./Component/Hello";
import Message from "./Component/Message";
import Counter from "./Component/Counter";
function App() {
  return (
    <div className="App">
      {/*<Component name="Jenishkumar" heroName="Batman">*/}
      {/*    <p>This is children props</p>*/}
      {/*</Component>*/}
      {/*<Component name="Viralkumar" heroName="Spiderman">*/}
      {/*    <button>Action</button>*/}
      {/*</Component>*/}
      {/*<Component name="Mayurkumar" heroname="Ironman" />*/}
      {/*     <textarea>*/}
      {/*         Hi ! my name is Jenish*/}
      {/*     </textarea>*/}
      {/*<Component/>*/}
      {/*<Welcome name="Yash"/>*/}
      {/*    <p> This is Yash </p>*/}
      {/*  <Welcome name="Vibhuti"/>*/}
      {/*  <button>An Action Hero</button>*/}
      {/*       <Welcome name="Dev"/>*/}
      {/*<Hello />*/}
      {/*<Message/>*/}
      <Counter/>
    </div>
  );
}

export default App;
