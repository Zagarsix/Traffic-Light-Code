import React, { useState } from "react";

const TrafficLight = () => {
  function RedYellow() {
    setColor("red-on");
    setTimeout(YellowGreen,2000);
  }

  function YellowGreen() {
    setColor("yellow-on");
    setTimeout(GreenRed,2000);
    
  }
  function GreenRed() {
    setColor("green-on");
    setTimeout(RedYellow,3000);
  }

  const [color, setColor] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="box">
          <div
            className={color == "red-on" ? "red-on" : "red"}
            onClick={() => setColor("red-on")}
          ></div>
          <div
            className={color == "yellow-on" ? "yellow-on" : "yellow"}
            onClick={() => setColor("yellow-on")}
          ></div>
          <div
            className={color == "green-on" ? "green-on" : "green"}
            onClick={() => setColor("green-on")}
          ></div>
        </div>
        <div className="botoncillo">
        <button type="button" class="btn btn-danger" onClick={() => setTimeout(RedYellow, 1000)}>
          Start Now
        </button>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
