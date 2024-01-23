import React,{useState} from 'react' 
import './About.css'

export default function About() {
    const [myStyle, setStyle] = useState({
        backgroundColor:"black",
        color: "white"
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if(myStyle.color === "white"){
        setStyle({
                backgroundColor:"white",
                color: "black"
        });
        setbtnText("Enable Dark Mode")
        }
        else{
        setStyle({
            backgroundColor:"black",
            color: "white"
        });
        setbtnText("Enable Light Mode")
        }
    }

  return (
    <div>
        <div className="container mt-5 " >
            <div className="row">
                <div className="col-md-12 fs-5 about-us" style={myStyle}>
                    <h1 className='heading'>About Us</h1>
                    <p>Welcome to Text Utility, your go-to platform for text conversion and manipulation. We are passionate about making text-related tasks simple and accessible for everyone.</p>
                    <p>Our mission is to provide a user-friendly tool that allows you to convert text to upper or lower case, listen to the text using speech synthesis, clear the text input, and copy the results effortlessly.</p>
                </div>
                </div>
            </div>

            <div className="container mt-5 px-3" >
                <div className="row ">
                    <div className="col-md-6 fs-5 feature" style={myStyle}>
                        <h2 className='heading'>Features</h2>
                        <ul>
                        <li>Text Conversion to Upper Case</li>
                        <li>Text Conversion to Lower Case</li>
                        <li>Text-to-Speech Functionality</li>
                        <li>Clear Text Input</li>
                        <li>Copy Text Results</li>
                        </ul>
                </div>
                <div className="col-md-6 fs-5 contact-us" style={myStyle}>
                    <h2 className='heading'>Contact Us</h2>
                    <p>If you have any questions or feedback, feel free to reach out to us:</p>
                    <p>Email: mandlikavi121@gmail.com</p>
                    <p>Phone: +919370286362</p>
                </div>
            </div>
         </div>
         <div className="m-2">
         <button className="btn btn-outline-primary mx-2" onClick={toggleStyle}>{btnText}</button>
         </div>
    </div>
  )
}
