import React, { useState, useEffect } from "react";
import GifLoader from 'react-gif-loader';

const LoadingComponent = () => {
  return (
    <div id="loader-wrapper">
      <div className="loader-logo">
      <GifLoader
                loading={true}
                imageSrc="https://media.giphy.com/media/B3A5HtHihTPFJVzKTp/giphy.gif"
                overlayBackground="transparent"
            />
            </div>
    </div>
  );
};

export default LoadingComponent;
