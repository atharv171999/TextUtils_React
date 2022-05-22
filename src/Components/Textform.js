import React, { useState } from 'react';


export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowClick = ()=> {
        console.log("Lowercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value)
    }
    const handleOnClear = ()=>{
        let clear = ''
        setText(clear)
        props.showAlert("Text cleared", "success")
    }

    const handleOnCopy = ()=>{
        let copy = document.querySelector(".form-control")
        copy.select();
        navigator.clipboard.writeText(copy.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Text copied", "success")
    }


    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className='container' style={{color: props.mode=== 'light'? 'black':'white'}} >
            <h1>{props.heading}</h1>
            
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode=== 'light'? 'white':'rgb(13 43 64 / 31%)',color: props.mode=== 'light'? 'black':'white' }} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <div className='button '>
            <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button> 
            <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleOnClear}>Clear text</button> 
            <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleOnCopy}>Copy text</button>
        </div>
        </div>
        <div className="container my-2" style={{color: props.mode=== 'light'? 'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: 'Nothing to preview!'}</p>
        </div>
        </>
    )
}
