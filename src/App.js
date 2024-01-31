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
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode has been enabled", "success");
    }
  }

  return (    
   <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
     <TextForm heading="Enter the Text to Analyze Below" mode={mode}/>
     {/* <About /> */}
    </div>
   </>
  );
}

export default App;
