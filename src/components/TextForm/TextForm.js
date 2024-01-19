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
        <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert To UPR</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleLwClick}>Convert To LWR</button>
        <div className="container my-2 d-flex align-items-center flex-column">
          <h2>Your Text Summary</h2><br />
          <p className='fs-5'><span className='string-words'><b>{text.split(" ").length}</b></span> Words &
          <span className='string-char'> <b>{text.length}</b></span> Characters<br/>
          <span className='minutes-to-read'><b>{0.008 * text.split(" ").length}</b></span> Minutes To Read
          </p>

        </div>
    </div>
  )
}
