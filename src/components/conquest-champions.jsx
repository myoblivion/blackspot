import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "./WinWheel";
const ConQuestChamps = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Spin The Wheel!";
  }, []);
  const segments = [
    { isSuper: false, value: "Tumbler" },
    { isSuper: false, value: "T-Shirt" },
    { isSuper: false, value: "BSSPH Kit" },
    { isSuper: false, value: "Keychain & Pin" },
    { isSuper: false, value: "Keychain" },
    { isSuper: false, value: "Pin" },
    { isSuper: false, value: "Special Item" },
    { isSuper: false, value: "5,000 Diamonds" },
    { isSuper: false, value: "750 Diamonds" },
    { isSuper: false, value: "Try Again" },
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
    return <div className="pop-up">{winner}</div>;
  };

  return (
    <div className="spin wrapper">
      <div className="spinner-wrap">
        <div className="more-wrapper">
          <WheelComponent
            segments={segments}
            segColors={segColors}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            contrastColor="white"
            buttonText="Spin!"
            isOnlyOnce={false}
            size={295}
            upDuration={900}
            downDuration={400}
            fontFamily="Arial"
          />
          <onFinished />
        </div>
      </div>
    </div>
  );
};

export default ConQuestChamps;
