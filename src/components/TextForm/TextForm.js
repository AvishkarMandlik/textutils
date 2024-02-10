import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("")

  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  }
  const handleLwClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase", "success")
  }
  
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Your text is copied to clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("You have removed your extra spaces from the text", "success")
  }
  
  const handleReverse = () => {
    const newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("You revered your text", "success")
  }

  const handleLClearText = () => {
    setText("");
    props.showAlert("You removed all text", "success")
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
            <textarea className="form-control" placeholder='Enter your text here...' id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-outline-primary m-2" disabled={text.length===0}  onClick={handleUpClick}>Convert To UPR</button>
        <button className="btn btn-outline-primary m-2" disabled={text.length===0} onClick={handleLwClick}>Convert To LWR</button>
        <button className="btn btn-outline-primary m-2" disabled={text.length===0} onClick={handleCopy}>Copy To Clipboard</button>
        <button className="btn btn-outline-primary m-2" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-outline-primary m-2" disabled={text.length===0} onClick={speak}>Speak 🗣️</button>
        <button className="btn btn-outline-primary m-2" disabled={text.length===0} onClick={handleReverse}>Reverse Text</button>
        <button className="btn btn-outline-primary m-2" disabled={text.length===0} onClick={handleLClearText}>Clear Text</button>
    <div/>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </div>
    </>
  )
}
