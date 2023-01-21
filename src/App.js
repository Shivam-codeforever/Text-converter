// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
function App() {
  const [mode, setMode] = useState("dark");
  const [text, setText] = useState("Light");
  const [text2, setText2] = useState("white");
  const [color, setColor] = useState("success");
  const [btncolor, setBtncolor] = useState("");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Light");
      setText2("white");
      setColor("success");
      setBtncolor("");
      // setBtncolor("-outline");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      setText("Dark");
      setText2("black");
      setColor("primary");
      setBtncolor("-outline");
      document.body.style.backgroundColor = "#f8f9fa";
    }
  };
  return (
    <>
      <Navbar
        title="Text Converter"
        toggle={toggleMode}
        mode={mode}
        textbtn={text}
        color={color}
      ></Navbar>
      <Textform
        heading="Text Converter - Uppercase | Lowercase | Remove Spaces "
        mode={mode}
        text2={text2}
        btncolor = {btncolor}
      ></Textform>
    </>
  );
}

export default App;
