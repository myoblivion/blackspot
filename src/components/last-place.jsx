import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "./WinWheel";
import Confetti from "react-confetti";
import swal from "sweetalert";
const ConQuestLast = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Spin The Wheel!";
  }, []);

  const segments = [
    { value: "Try again", probability: 10 },
    { value: "200 Diamonds", probability: 10 },
    { value: "Sorry No Rewards", probability: 13 },
    { value: "1,000 GoGo Tokens", probability: 8 },
    { value: "KeyChain ", probability: 7 },
    { value: "100 Diamonds", probability: 10 },
    { value: "Sorry No Rewards", probability: 13 },
    { value: "KeyChain", probability: 7 },
    { value: "2,000 GoGo Tokens", probability: 8 },
    { value: "Pin", probability: 7 },
    { value: "Pin", probability: 7 },
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

export default ConQuestLast;
