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
    const handleCopy = () =>{
        if(text !== ""){

          navigator.clipboard.writeText(text);
          alert('Copied to Clipboard');
        }
        else{
          alert('No text is there to copy!!!');
        }
    }
    const handleRemoveSpace = () =>{
        let newText = text.replace(/\s+/g , ' ').trim();
        setText(newText);
    }
    const handleCapitalize = () =>{
        const arr = text.toLowerCase().split(" ");
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
          }
          const newText = arr.join(" ");
        setText(newText);
    }
    const [text, setText] = useState('');
  return (
    <div className={`container bg-${props.mode} text-${props.text2}`}>

      <div className="container my-4 mb-4">
      <h3>{props.heading}</h3>
      <div className="mb-2">
        <textarea
          className={`form-control bg-${props.mode} text-${props.text2}`}
          id="mybox"
          onChange={handleOnChange}
          value={text}
          rows="8"
        ></textarea>
      </div>
      <button type="button" className={`btn btn${props.btncolor}-primary mx-1 my-2`} onClick={handleUpCase}>Uppercase</button>
      <button type="button" className={`btn btn${props.btncolor}-success mx-1 my-2`} onClick={handleLoCase}>Lowercase</button>
      <button type="button" className={`btn btn${props.btncolor}-warning mx-1 my-2`} onClick={handleCopy}>Copy</button>
      <button type="button" className={`btn btn${props.btncolor}-danger mx-1  my-2`} onClick={handleRemoveSpace}>Remove Extra Spaces</button>
      <button type="button" className={`btn btn${props.btncolor}-info mx-1  my-2`} onClick={handleCapitalize}>Capitalize</button>
      <button type="button" className={`btn btn${props.btncolor}-secondary mx-1  my-2`} onClick={handleClear}>Clear</button>

    </div>
    <div className="container my-1 py-0">
        <h3 className="my-1 py-0">Text Summary</h3>
        <p> {text.split(/\s+/).filter((element) =>{
          return element.length !== 0;
        }).length } words and {text.length} characters</p>
        <h3 className="my-1 py-0">Preview</h3>
        <p>{ text === "" ? "Write Something to Preview" : text }</p>
    </div>
    

</div>
  );
}
