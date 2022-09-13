import React from "react";




const spinner= {
  width: "4rem",
  height: "4rem",

  position: "relative",
  margin: "2rem auto"
}

// const double-bounce1
const doublebounce2= {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  backgroundColor: "#333",
  opacity: "0.6",
  position: "absolute",
  top: 0,
  left: 0,

  webkitAnimation: "sk-bounce 2s infinite ease-in-out",
  animation: "sk-bounce 2s infinite ease-in-out"
}



const Loading = () => {
  return (
    // This code for the loading icon has been copied from https://tobiasahlin.com/spinkit
    <div style={spinner}>
      <div style={doublebounce2}></div>
      <div style={doublebounce2}></div>
    </div>
  );
};

export default Loading;
