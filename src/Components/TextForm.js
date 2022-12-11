import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked " + text);
        let lowText = text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted to Lowercase!", "success")
    }
    const clearText = () => {
        let newText = '';
        setText(newText);
        console.log("text was cleared");
        props.showAlert("Text is cleared!", "success")
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }

    const copyText = () => {
        console.log("text is copied");
        var copy = document.getElementById('myBox');
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Text copied to clipboard!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const count = () => {
        if (text.length > 0) {
            return text.trim().split(/[ ]+/).length;
        }
        else {
            return 0;
        }
    }


    const [text, setText] = useState('');

    //setText("Hello guys,this is textUtils");
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3 mt-3">
                    <textarea className="form-control" style={{ color: props.display === 'dark' ? 'white' : 'black', backgroundColor: props.display === 'dark' ? '#222222' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className='mx-0 d-flex'>
                    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary mx-1' onClick={clearText}>Clear Text</button>
                    <button className='btn btn-primary mx-1' onClick={copyText}>Copy Text</button>
                    <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>

            </div>

            <div className="container my-4">
                <h1>Your text Summary</h1>
                <p>{count()} words and {text.length} characters </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Please Enter Something to preview it!!!"}</p>

            </div>
        </>
    )
}
