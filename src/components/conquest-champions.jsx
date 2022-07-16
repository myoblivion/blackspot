import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "react-wheel-of-prizes";
import Confetti from "react-confetti";
import swal from "sweetalert";

const ConQuestChamps = () => {
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

export default ConQuestChamps;
