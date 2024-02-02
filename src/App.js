import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';
import Alert from './components/Alert/Alert';

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
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
    }
  }

  return (    
   <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
     <TextForm heading="Enter the Text to Analyze Below" mode={mode}/>
     {/* <About /> */}
    </div>
   </>
  );
}

export default App;
