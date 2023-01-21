// import { useState } from "react";
import React from "react";

export default function Navbar(props) {
  // const [btn1, setbtn1] = useState("Dark Mode")
  // const [myState, setmyState] = useState({
  //   color: "black",
  //   backgroundColor: "rgb(204, 204, 204)",
  // });
  // const changeMode = () => {
  //   if (myState.color === "black") {
  //     setmyState({
  //       color: "rgb(204, 204, 204)",
  //       backgroundColor: "black",
  //     });
  //     setbtn1("Light Mode");
  //     console.log("inIF");
  //   } else {
  //     setmyState({
  //       color: "black",
  //       backgroundColor: "rgb(204, 204, 204)",
  //     });
  //     setbtn1("Dark Mode");
  //     console.log("inelse");
  //   }
  // };
  return (
    <>
      <div className="first" >
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className={`navbar-brand fw-bold fs-3`} style={{color: props.color ==="primary" ? "#175DCF" : "#58DF5A"}} href="/">
              {props.title}
            </a>

            <button className={`btn btn-${props.color}`} onClick={props.toggle}>
              Enable {props.textbtn} Mode
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
