import React, { useEffect } from "react";
const $ = require("jquery");
import Slider from "react-slick";

const DirectionComponent = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  };

  var $slider = $(".slideshow .slider"),
  maxItems = $(".item", $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $(".slideshow")
  .clone()
  .addClass("slideshow-right")
  .appendTo($(".split-slideshow"));

rightItems = $(".item", $sliderRight).toArray();
reverseItems = rightItems.reverse();
$(".slider", $sliderRight).html("");
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($(".slider", $sliderRight));
}

$slider.addClass("slideshow-left");
$(".slideshow-left")
  .slick({
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: true,
    speed: 1000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)"
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    if (
      currentSlide > nextSlide &&
      nextSlide == 0 &&
      currentSlide == maxItems - 1
    ) {
      $(".slideshow-right .slider").slick("slickGoTo", -1);
      $(".slideshow-text").slick("slickGoTo", maxItems);
    } else if (
      currentSlide < nextSlide &&
      currentSlide == 0 &&
      nextSlide == maxItems - 1
    ) {
      $(".slideshow-right .slider").slick("slickGoTo", maxItems);
      $(".slideshow-text").slick("slickGoTo", -1);
    } else {
      $(".slideshow-right .slider").slick(
        "slickGoTo",
        maxItems - 1 - nextSlide
      );
      $(".slideshow-text").slick("slickGoTo", nextSlide);
    }
  })
  .on("mousewheel", function (event) {
    event.preventDefault();
    if (event.deltaX > 0 || event.deltaY < 0) {
      $(this).slick("slickNext");
    } else if (event.deltaX < 0 || event.deltaY > 0) {
      $(this).slick("slickPrev");
    }
  })
  .on("mousedown touchstart", function () {
    dragging = true;
    tracking = $(".slick-track", $slider).css("transform");
    tracking = parseInt(tracking.split(",")[5]);
    rightTracking = $(".slideshow-right .slick-track").css("transform");
    rightTracking = parseInt(rightTracking.split(",")[5]);
  })
  .on("mousemove touchmove", function () {
    if (dragging) {
      newTracking = $(".slideshow-left .slick-track").css("transform");
      newTracking = parseInt(newTracking.split(",")[5]);
      diffTracking = newTracking - tracking;
      $(".slideshow-right .slick-track").css({
        transform:
          "matrix(1, 0, 0, 1, 0, " + (rightTracking - diffTracking) + ")"
      });
    }
  })
  .on("mouseleave touchend mouseup", function () {
    dragging = false;
  });

$(".slideshow-right .slider").slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  initialSlide: maxItems - 1
});
$(".slideshow-text").slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)"
});


  useEffect(() => {
    document.title = "Black Spot Studio | Direction";
  }, []);
  return (
    <div className="direction wrapper">
      <div className="slides">
        <div className="split-slideshow">
          <div className="slideshow">
            <div className="slider">
              <Slider {...settings}>
                <div className="item">
                  <img src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-2.jpg" />
                  <div className="item">Canyon</div>
                </div>
                <div className="item">
                  <img src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-3.jpg" />
                  <div className="item">Desert</div>
                </div>
                <div className="item">
                  <img src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-4.jpg" />
                  <div className="item">Erosion</div>
                </div>
                <div className="item">
                  <img src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/canyon-1.jpg" />
                  <div className="item">Shape</div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionComponent;
