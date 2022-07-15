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

  function Wheelcomponent(winner) {
    console.log(winner);
  }

  const onFinished = (winner) => {
    alert(winner);
    console.log(winner);
  };
  return (
    <div className="spin wrapper">
      <div className="spinner-wrap">
        <div className="more-wrapper">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment={Wheelcomponent}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            contrastColor="white"
            buttonText="Spin!"
            isOnlyOnce={true}
            size={295}
            upDuration={1000}
            downDuration={200}
            fontFamily="Arial"
          />
        </div>
      </div>
    </div>
  );
};

export default ConQuestLast;
