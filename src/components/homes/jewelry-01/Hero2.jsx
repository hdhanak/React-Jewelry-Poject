import { slides8 } from "@/data/heroSlides";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import { Pagination,Autoplay, EffectFade  } from "swiper/modules";
export default function Hero2() {
  return (
    <div className="tf-slideshow slider-style2 slider-effect-fade">
      <Swiper
        dir="ltr"
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
        effect="fade" 
        fadeEffect={{ crossFade: true }}
        speed={2000} 
        modules={[Pagination,Autoplay,EffectFade ]}
        pagination={{
          clickable: true,
          el: ".spd57",
        }}
      >
        {slides8.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <img
                alt={slide.alt}
                src={slide.imgSrc}
                // width={1920}
                // height={752}
                // width={1200}
                // height={628}
                // style={{
                //   width: "100%",
                //   height: "auto",
                //   // maxHeight: "500px",
                //   // minHeight: "250px", // Ensures visibility on small screens
                //   // objectFit: "cover",
                // }}  
                            />
              <div className="box-content">
                <div className="container">
                  <div className="content-slider">
                    <div className="box-title-slider">
                      <div className="fade-item fade-item-1 heading title-display slider-title">
                        {slide.title}
                      </div>
                      <p className="fade-item fade-item-2 body-text-1">
                        {slide.description}
                      </p>
                    </div>
                    <div className="fade-item fade-item-3 box-btn-slider">
                      {/* <Link
                        to={`/shop-default-grid`}
                        // className="tf-btn btn-fill btn-white"
                      > */}
                        {/* <span className="text">{slide.btnText}</span>
                        <i className="icon icon-arrowUpRight" /> */}
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider type-circle justify-content-center spd57" />
        </div>
      </div>
    </div>
  );
}
