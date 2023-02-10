import React, { useState } from "react";

export default function Textforms(props) {
  const [text, setText] = useState("");
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase" , "success")
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase" , "success")
  };
  const handleEvent = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container mt-3">
      <h1  style={{color:props.mode === 'dark'?'white' :'black'}}>Enter the text to analyze below</h1>
      <div className="mb-3" style={{color:props.mode === 'dark'?'white' :'black'}}>
        <textarea
          className="form-control"
          onChange={handleEvent}
          value={text}
          rows="10"
          id="myBox"
          defaultValue={""}
          style={{backgroundColor:props.mode === 'dark'?'#1c2648' :'white',color:props.mode === 'dark'?'white' :'black'}}
          
        />
      </div>
      <button className="btn btn-primary mx-2" type="submit" onClick={handleClick}>
        Convert to Uppercase
      </button>

      <button className="btn btn-primary mx-2" type="submit" onClick={handleloClick}>
        Convert to Lowercase
      </button>
      <div className="mt-4" style={{color:props.mode === 'dark'?'white' :'black'}}>
        <h2  >Your Text summary</h2>
        <p  >
          {text.split(" ").length} words and {text.length} characters
        </p>
    </div>
      <div style={{color:props.mode === 'dark'?'white' :'black'}}>
        <h3 >Preview</h3>
        <p>{text.length>0?text:"Enter the text to preview"}</p>
      </div>
    </div>
  );
}
