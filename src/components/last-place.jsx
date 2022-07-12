import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "react-wheel-of-prizes";
const ConQuestLast = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Spin The Wheel!";
  }, []);
  const segments = [
    "Tumbler",
    "T-Shirt",
    "BSSPH Kit",
    "Keychain & Pin",
    "Keychain",
    "Pin",
    "Special Item",
    "5,000 Diamonds",
    "750 Diamonds",
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
  const rand = () => {
    return setTimeout(() => {
      return "won 2";
    }, 13000);
  };
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
        winningSegment={rand()}
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

export default ConQuestLast;
