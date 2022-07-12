import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "react-wheel-of-prizes";
const SpinTheWheel = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Spin The Wheel!";
  }, []);
  const segments = [
    "BSSSPH Kit",
    "KeyChain",
    "KeyChain ",
    "Pin",
    "Pin",
    "5,000 GoGo Tokens",
    "3,350 GoGo Tokens",
    "3,000 GoGo Tokens",
    "500 Diamonbs",
    "Try Again",
    "Try Again",
  ];
  const segColors = [
    "#EE4040",
    "#000000",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FFBD33",
    "#FF5733",
    "#75FF33",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
    alert(winner);
  };
  return (
    <div className="spin wrapper">
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin!"
        isOnlyOnce={true}
        size={290}
        upDuration={10}
        downDuration={1000}
        fontFamily="Arial"
      />
    </div>
  );
};

export default SpinTheWheel;
