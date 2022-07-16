import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "./WinWheel";
import Confetti from "react-confetti";
import { Component } from "react";
import swal from "sweetalert";

const ConQuestChamps = ({ props }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Spin The Wheel!";
  }, []);
  const segments = [
    { value: "Tumbler", probability: 3 },
    { value: "T-Shirt", probability: 3 },
    { value: "BSSPH Kit", probability: 5 },
    { value: "BSSPH Kit", probability: 5 },
    { value: "KeyChain & Pin", probability: 7 },
    { value: "Keychain", probability: 10 },
    { value: "Pin", probability: 10 },
    { value: "Special Item", probability: 2 },
    { value: "5,000 Diamonds", probability: 15 },
    { value: "750 Diamonds", probability: 20 },
    { value: "Try Again", probability: 20 },
  ];

  const priceAngle = 360 / segments.length;
  let result = segments[0];
  const weightedList = [];
  for (let i = 0; i < segments.length; i++) {
    for (let j = 0; j < segments[i].probability * 100; j++) {
      weightedList.push(i);
    }
  }
  const winningPriceIndex =
    weightedList[Math.floor(Math.random() * weightedList.length)];
  result = segments[winningPriceIndex];
  const fullSpins = Math.floor(Math.random() * 4) + 1;
  const offsetToPrice = winningPriceIndex * priceAngle;
  const additionalOffset = Math.floor(Math.random() * priceAngle);

  console.log(
    "The wheel turns " +
      (fullSpins * 360 + offsetToPrice + additionalOffset) +
      "° (" +
      fullSpins +
      " full spin + " +
      offsetToPrice +
      "° + " +
      additionalOffset +
      "°)"
  );

  console.log("You won: " + result.value);
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
  const [hideMis, setHideMis] = useState(false);
  const onFinished = (winner) => {
    console.log(winner);
    alert(winner);
  };

  return (
    <div className="spin wrapper">
      <div className="spinner-wrap">
        <div className="more-wrapper">
          <Confetti width={1000} height={1000} />
          {!hideMis && (
            <>
              <h1>
                <span>S</span>
                <span>P</span>
                <span>I</span>
                <span>N</span>
                <span> </span>
                <span>T</span>
                <span>H</span>
                <span>E</span>
                <span> </span>
                <span>W</span>
                <span>H</span>
                <span>E</span>
                <span>E</span>
                <span>L</span>
                <span>!</span>
              </h1>
              <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment={result}
                onFinished={(result) => {
                  swal(result.value);
                }}
                primaryColor="black"
                contrastColor="white"
                buttonText="Spin!"
                isOnlyOnce={true}
                size={295}
                upDuration={900}
                downDuration={1100}
                fontFamily="Arial"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConQuestChamps;
