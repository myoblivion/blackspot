import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "react-wheel-of-prizes";
import Confetti from "react-confetti";
import swal from "sweetalert";
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
  };
  const [hideMis, setHideMis] = useState(false);

  return (
    <div className="spin wrapper">
      <div className="spinner-wrap">
        <div className="more-wrapper">
          <Confetti width={1000} height={1000} />
          {!hideMis && (
            <>
              <WheelComponent
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => {
                  swal(winner);
                }}
                primaryColor="black"
                contrastColor="white"
                buttonText="Spin!"
                isOnlyOnce={false}
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
