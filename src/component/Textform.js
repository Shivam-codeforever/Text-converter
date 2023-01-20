import React , {useState} from "react";

export default function Textform(props) {
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = () =>{
        let newText = "";
        setText(newText);
    }
    const [text, setText] = useState('');
  return (
    <div className={`container bg-${props.mode} text-${props.text2}`}>

      <div className="container my-5 mb-4">
      <h2>{props.heading}</h2>
      <div className="mb-2">
        <textarea
          className={`form-control bg-${props.mode} text-${props.text2}`}
          id="mybox"
          onChange={handleOnChange}
          value={text}
          rows="8"
        ></textarea>
      </div>
      <button type="button" className="btn btn-outline-primary mx-1" onClick={handleUpCase}>Uppercase</button>
      <button type="button" className="btn btn-outline-success mx-1" onClick={handleLoCase}>Lowercase</button>
      <button type="button" className="btn btn-outline-secondary mx-1" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3">
        <h3>Text Summary</h3>
        <p> {text.split(" ").length - 1} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    

</div>
  );
}
