import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
import Alert from './components/Alert/Alert';
import About from './components/About/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }


  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils Darkmode";
      setInterval(() => {
        document.title = "TextUtils is Amazing😍😍";
      }, 1500);
      setInterval(() => {
        document.title = "TextUtils📝🖋️";
      }, 2000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils";
      setInterval(() => {
        document.title = "TextUtils is Amazing😍😍";
      }, 1500);
      setInterval(() => {
        document.title = "TextUtils📝🖋️";
      }, 2000);
    }
  }

  return (    
   <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>} />
            <Route path='/about' element={<About exact path="/about" mode={mode} />} />
          </Routes>
        </div>
    </Router>
   </>
  );
}

export default App;
