import React, { useState, useEffect, useRef, LinkProps } from "react";
import WheelComponent from "react-wheel-of-prizes";
import Confetti from "react-confetti";
import swal from "sweetalert";
const ConQuestLast = () => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Spin The Wheel!";
  }, []);
  const segments = [
    "Keychain",
    "Keychain",
    "Pin",
    "Pin",
    "2,000 GoGo Tokens",
    "1,000 GoGo Tokens",
    "100 Diamonds",
    "200 Diamonds",
    "Try Again",
    "Sorry No Rewards",
    "Sorry No Rewards",
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

export default ConQuestLast;
