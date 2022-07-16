import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "./WinWheel";
import Confetti from "react-confetti";
import swal from "sweetalert";
const SpinTheWheel = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Spin The Wheel!";
  }, []);

  const segments = [
    { value: "Try again", probability: 12 },
    { value: "BSSSPH Kit", probability: 6 },
    { value: "Pin", probability: 8 },
    { value: "KeyChain ", probability: 8 },
    { value: "Pin", probability: 8 },
    { value: "5,000 GoGo Tokens", probability: 9 },
    { value: "3,000 GoGo Tokens", probability: 10 },
    { value: "500 Diamonds", probability: 10 },
    { value: "3,500 GoGo Tokens", probability: 9 },
    { value: "KeyChain ", probability: 8 },
    { value: "Try Again", probability: 12 },
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
  };
  const [hideMis, setHideMis] = useState(false);

  return (
    <div className="spin wrapper">
      <div className="spinner-wrap">
        <div className="more-wrapper">
          <Confetti width={1000} height={1000} />
          {!hideMis && (
            <>
              <h1>
                <span>G</span>
                <span>O</span>
                <span>G</span>
                <span>O</span>
                <span> </span>
                <span>S</span>
                <span>P</span>
                <span>I</span>
                <span>N </span>
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
                isOnlyOnce={result}
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

export default SpinTheWheel;
