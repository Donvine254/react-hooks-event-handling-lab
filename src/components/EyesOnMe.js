// Code EyesOnMe Component Here
import React from "react";
import { buttonStyle } from "./Keypad";
const modifiedButtonStyle={
    ...buttonStyle,
    width:'50%',
    backgroundColor:'green',
    margin:'5px auto'
}

function EyesOnMe() {
  function handleEvent(event) {
    if (event.type === "blur") {
      console.log("Hey! Eyes on me!");
    } else if (event.type === "focus") {
      console.log("Good!");
    }
  }
  return (
    <button style={modifiedButtonStyle} onBlur={handleEvent} onFocus={handleEvent}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
