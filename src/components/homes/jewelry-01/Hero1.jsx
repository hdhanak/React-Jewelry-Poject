import { slides8 } from "@/data/heroSlides"; 
import React from "react";
import { Link } from "react-router-dom";

export default function Hero1() {
  return (
    <div className="tf-slideshow slider-style2 slider-effect-fade">
      <div className="wrap-slider">
        <video
          autoPlay
          loop
          muted
          playsInline
          width={1920}
          height={752}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "550px",
            minHeight: "350px", 
            objectFit: "cover",
          }}
        >
          <source src={`/images/slider/theme-1.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="box-content">
          <div className="container">
            <div className="content-slider">
              <div className="box-title-slider">
                <div className="fade-item fade-item-1 heading title-display">
                  {slides8[0].title}
                </div>
                <p className="fade-item fade-item-2 body-text-1">
                  {slides8[0].description}
                </p>
              </div>
              <div className="fade-item fade-item-3 box-btn-slider">
                <Link to={`/shop-default-grid`} className="tf-btn btn-fill btn-white">
                  <span className="text">{slides8[0].btnText}</span>
                  <i className="icon icon-arrowUpRight" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
