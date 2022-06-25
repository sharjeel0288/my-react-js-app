import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const [emails, setEmails] = useState('Extracted Emails appear here');
    const handleClickUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper-case", 'success')
    }
    const handleClickLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower-case", 'success')
    }
    const handleClickClearText = () => {
        setText('');
        setEmails("Extracted Emails appear here")
        props.showAlert("Text-box cleared", 'success')
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClickEmailExtractor = (event) => {
        let newText = text.split(' ');
        let temp = '';
        for (let index = 0; index < newText.length; index++) {
            let element = newText[index];
            element = element.toLowerCase();
            if (element.includes("@gmail.com") || element.includes("@yahoo.com")) {
                temp += element+'  ';
            }
        }
        if (temp.length > 0) {
            setEmails(temp);
            props.showAlert("Email extracted", 'success')
        }
        else {
            setEmails("Extrected Emails appear here")
            props.showAlert("Emails not found in text", 'warning')
        }
    }
  

    return (
        <>
            <div className='container' style={{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" style={{ background: (props.mode === 'light') ? 'white' : props.colorstyle, color: (props.mode === 'light') ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div >
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} style={{ background: (props.mode === 'light') ? '#0d6efd' : props.navcolor }} onClick={handleClickUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} style={{ background: (props.mode === 'light') ? '#0d6efd' : props.navcolor }} onClick={handleClickLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx- my-1" disabled={text.length === 0} style={{ background: (props.mode === 'light') ? '#0d6efd' : props.navcolor }} onClick={handleClickClearText}>Clear text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} style={{ background: (props.mode === 'light') ? '#0d6efd' : props.navcolor }} onClick={handleClickEmailExtractor}>Extract Emails</button>
            </div>
            <div className='container my-3' style={{ color: (props.mode === 'light') ? 'black' : 'white' }}>
                <h1>Your text summary</h1>
                <h4 >EMAILS : </h4>
               <div className='container'> <p>{emails}</p> </div>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charachters</p>
                <p>{(0.008 * (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length).toPrecision(3))} minute(s) required to read this text</p>
                <h2>PREVIEW</h2>
                <p>{text !== 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
