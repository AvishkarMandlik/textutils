import React, { useState } from 'react'
import './TextForm.css' 

export default function TextForm(props) {
  const [text, setText] = useState("")

  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLwClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  
  const handleReverse = () => {
    const newText = text.split('').reverse().join('');
    setText(newText);
  }

  const handleLClearText = () => {
    setText("");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  const handleOnChange = (event) => {
    console.log("you click on uppercase")
    setText(event.target.value)
  }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <div className ="mb-3">
            <h1>{props.heading} </h1>
            <textarea className="form-control" placeholder='Enter your text here...' id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-outline-primary m-2" onClick={handleUpClick}>Convert To UPR</button>
        <button className="btn btn-outline-primary m-2" onClick={handleLwClick}>Convert To LWR</button>
        <button className="btn btn-outline-primary m-2" onClick={handleCopy}>Copy To Clipboard</button>
        <button className="btn btn-outline-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-outline-primary m-2" onClick={speak}>Speak 🗣️</button>
        <button className="btn btn-outline-primary m-2" onClick={handleReverse}>Reverse Text</button>
        <button className="btn btn-outline-primary m-2" onClick={handleLClearText}>Clear Text</button>
    <div/>
        <div className="container my-2 d-flex align-items-center flex-column">
          <h2>Your Text Summary</h2><br />
          <p className='fs-5'><span className='string-words'><b>{text.split(" ").length}</b></span> Words &
          <span className='string-char'> <b>{text.length}</b></span> Characters<br/>
          <span className='minutes-to-read'><b>{0.008 * text.split(" ").length}</b></span> Minutes To Read
          </p>
        </div>
    </div>
    </>
  )
}
