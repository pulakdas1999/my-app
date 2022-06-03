import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alert("Capitalized", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.alert("Miniaterized", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return(
    <>
        <div className="mb-3">
            <label htmlFor="myBox" className={`form-label text-${props.mode==='dark'?'light':'dark'}`}>{props.header}</label>
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className={`btn btn-${props.mode==='dark'?'light':'dark'}`} onClick={handleUpClick}>Uppercase</button>
        <button type="button" className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-3`} onClick={handleLoClick}>Lowercase</button>

        <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
            <h3>Your text summary</h3>
            <h6>There are {text.length} characters and {text.split(" ").length-1} words in the text area.</h6>
            <h6>The text area content is about {Math.round(text.split(" ").length * (1/125) * 100)/100.0} minutes' read.</h6>
        </div>
    </>
    )
}