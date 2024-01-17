import React, { useState } from 'react'
import './TextForm.css' 

export default function TextForm(props) {
  const [text, setText] = useState("")

  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }
  
  
  const handleOnChange = (event) => {
    console.log("you click on uppercase")
    setText(event.target.value)
  }
  

  return (

    <div>
        <div className ="mb-3">
            <h1>{props.heading} </h1>
            <textarea className="form-control" placeholder='Enter your text here...' id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-outline-primary" onClick={handleUpClick}>Convert To UPR</button>
        <div className="container my-3 d-flex align-items-center flex-column">
          <h1>Your Text Summary</h1><br />
          <p className='fs-3'><span className='string-words'>{text.split(" ").length}</span> Words &<span className='string-char'> {text.length} Characters</span></p>
        </div>
    </div>
  )
}
