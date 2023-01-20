// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
function App() {
  const [mode, setMode] = useState("light");
  const [text ,setText ] = useState("Dark");
  const [text2 , setText2] = useState("black");
  const [color , setColor] = useState("primary");
  
  const toggleMode = () =>{
      if(mode === "light"){
        setMode("dark");
        setText("Light");
        setText2("white");
        setColor("success");
        document.body.style.backgroundColor = "#212529";
      }
      else{
        setMode("light");
        setText("Dark");
        setText2("black");
        setColor("primary");
        document.body.style.backgroundColor = "#f8f9fa";
      }
  }
  return (
    <>

     <Navbar title="Text Converter" toggle={toggleMode} mode={mode} textbtn={text} color={color}></Navbar> 
    <Textform heading = "Enter the Text" mode={mode} text2={text2}></Textform>
    </>
  );
}

export default App;
