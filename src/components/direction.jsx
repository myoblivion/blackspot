import React, { useEffect } from "react";
import GifLoader from "react-gif-loader";

const DirectionComponent = () => {
  useEffect(() => {
    document.title = "Black Spot Studio | Direction";
  }, []);
  return (
    <div className="direction wrapper">
      <div className="directions-wrapper">
        <div className="map">
          <GifLoader
            loading={true}
            imageSrc="https://media.giphy.com/media/XYHRwxYXXA68DhcAmF/giphy.gif"
            overlayBackground="transparent"
          />
          <div className="blah">
            <h2>Come visit us!</h2>
            <p>26th St, Taguig, 1634 Metro Manila</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionComponent;
