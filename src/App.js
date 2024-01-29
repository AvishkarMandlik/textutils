import React,{useState} from 'react';
import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
    }
    else{
      setMode("light");
    }
  }

  return (    
   <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
     <TextForm heading="Enter the Text to Analyze Below"/>
     {/* <About /> */}
    </div>
   </>
  );
}

export default App;
