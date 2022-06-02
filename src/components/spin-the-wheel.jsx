import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "react-wheel-of-prizes";
const SpinTheWheel = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Spin The Wheel!";
  }, []);
  const segments = [
    "Matulog sa office",
    "Double pay",
    "Iphone 13 Pro Max",
    "PS5",
    "Kiss si Sir Friday",
    "Kape",
    "Lagatak",
    "6th floor",
  ];
  const segColors = [
    "#EE4040",
    "#000000",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner)
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
        isOnlyOnce={false}
        size={295}
        upDuration={10}
        downDuration={1000}
        fontFamily="Arial"
      />
    </div>
  );
};

export default SpinTheWheel;
