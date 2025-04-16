import { Link, useLocation } from "react-router-dom";
import React from "react";

import { products } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard1 from "../productCards/ProductCard1";
import {
  blogLinks,
  chainMetal,
  chainOccasion,
  chainStyle,
  couplesJewelry,
  demoItems,
  earringsMetal,
  earringsOccasion,
  earringsStyle,
  goldCoins,
  kidsJewelry,
  menJewelry,
  otherPageLinks,
  otherShopMenus,
  productFeatures,
  productLinks,
  productStyles,
  ringMetal,
  ringOccasion,
  shopDailyWear,
  shopFeatures,
  shopLayout,
  shopOfficeWear,
  shopSilverCollection,
  shopWedding,
  styleBasedRings,
  swatchLinks,
} from "@/data/menu";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      {" "}
      <li
        className={`menu-item ${
          [...demoItems].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <Link to="/" className="item-link">
        All Jewellery
          {/* <i className="icon icon-arrow-down" /> */}

        </Link>
        {/* <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row-demo">
              {demoItems.slice(0, 12).map((item, index) => (
                <div
                  className={`demo-item ${
                    pathname.split("/")[1] === item.href.split("/")[1]
                      ? "active"
                      : ""
                  }`}
                  key={item.href}
                >
                  <Link to={item.href}>
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src={item.src}
                        alt={item.alt}
                        src={item.src}
                        width={273}
                        height={300}
                      />
                      {item.label.length > 0 && (
                        <div className="demo-label">
                          {item.label.map((label, labelIndex) => (
                            <span
                              key={labelIndex}
                              className={`demo-${label.toLowerCase()}`}
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="demo-name">{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center view-all-demo">
              <a href="#modalDemo" data-bs-toggle="modal" className="tf-btn">
                <span className="text">View All Demos</span>
              </a>
            </div>
          </div>
        </div> */}
      </li>
      <li
        className={`menu-item ${
          [...productLinks, ...swatchLinks, ...productFeatures].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <Link to="/product-description-menutab/:id" className="item-link">
          Rings
          {/* <i className="icon icon-arrow-down" /> */}
        </Link>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Metal</div>
                  <ul className="menu-list">
                    {ringMetal.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Occasion</div>
                  <ul className="menu-list">
                    {ringOccasion .map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Style-Based Rings</div>
                  <ul className="menu-list">
                    {styleBasedRings.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="menu-heading">Best seller</div>
                <div className="sec-cls-header">
                  <div className="collection-position hover-img">
                    <Link to={`/shop-collection`} className="img-style">
                      <img
                        className="lazyload"
                        data-src="/images/collections/cls-header-ring.jpg"
                        alt="banner-cls"
                        src="/images/collections/cls-header-ring-5.jpg"
                        width={300}
                        height={400}
                      />
                    </Link>
                    <div className="content">
                      <div className="title-top">
                        <h4 className="title">
                          <Link
                            to={`/shop-collection`}
                            className="link text-white wow fadeInUp"
                          >
                            Shop our top picks
                          </Link>
                        </h4>
                        <p className="desc text-white wow fadeInUp">
                          Reserved for special occasions
                        </p>
                      </div>
                      <div>
                        <Link
                          to={`/shop-collection`}
                          className="tf-btn btn-md btn-white"
                        >
                          <span className="text">Shop Now</span>
                          <i className="icon icon-arrowUpRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* Rings end */}
      <li
        className={`menu-item ${
          [...productLinks, ...swatchLinks, ...productFeatures].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <Link to="/product-description-menutab/:id" className="item-link">
        Earrings
          {/* <i className="icon icon-arrow-down" /> */}
        </Link>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Metal</div>
                  <ul className="menu-list">
                    {earringsMetal.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Occasion</div>
                  <ul className="menu-list">
                    {earringsOccasion .map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Style-Based Earrings</div>
                  <ul className="menu-list">
                    {earringsStyle.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="menu-heading">Best seller</div>
                <div className="sec-cls-header">
                  <div className="collection-position hover-img">
                    <Link to={`/shop-collection`} className="img-style">
                      <img
                        className="lazyload"
                        data-src="/images/collections/cls-header-earrings-1.jpg"
                        alt="banner-cls"
                        src="/images/collections/cls-header-earrings-1.jpg"
                        width={300}
                        height={400}
                      />
                    </Link>
                    <div className="content">
                      <div className="title-top">
                        <h4 className="title">
                          <Link
                            to={`/shop-collection`}
                            className="link text-white wow fadeInUp"
                          >
                            Shop our top picks
                          </Link>
                        </h4>
                        <p className="desc text-white wow fadeInUp">
                          Reserved for special occasions
                        </p>
                      </div>
                      <div>
                        <Link
                          to={`/shop-collection`}
                          className="tf-btn btn-md btn-white"
                        >
                          <span className="text">Shop Now</span>
                          <i className="icon icon-arrowUpRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {/* earrying end */}
      <li
        className={`menu-item ${
          [...productLinks, ...swatchLinks, ...productFeatures].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <Link to="/product-description-menutab/:id" className="item-link">
        Chain
          {/* <i className="icon icon-arrow-down" /> */}
        </Link>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Metal</div>
                  <ul className="menu-list">
                    {chainMetal.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Occasion</div>
                  <ul className="menu-list">
                    {chainOccasion .map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Style-Based Chain</div>
                  <ul className="menu-list">
                    {chainStyle.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="menu-heading">Best seller</div>
                <div className="sec-cls-header">
                  <div className="collection-position hover-img">
                    <Link to={`/shop-collection`} className="img-style">
                      <img
                        className="lazyload"
                        data-src="/images/collections/cls-header-chain-3.jpg"
                        alt="banner-cls"
                        src="/images/collections/cls-header-chain-3.jpg"
                        width={300}
                        height={400}
                      />
                    </Link>
                    <div className="content">
                      <div className="title-top">
                        <h4 className="title">
                          <Link
                            to={`/shop-collection`}
                            className="link text-white wow fadeInUp"
                          >
                            Shop our top picks
                          </Link>
                        </h4>
                        <p className="desc text-white wow fadeInUp">
                          Reserved for special occasions
                        </p>
                      </div>
                      <div>
                        <Link
                          to={`/shop-collection`}
                          className="tf-btn btn-md btn-white"
                        >
                          <span className="text">Shop Now</span>
                          <i className="icon icon-arrowUpRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
       {/* Coins init */}
      <li
        className={`menu-item position-relative ${
          [...blogLinks].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <a href="#" className="item-link">
          Gold Coins
          {/* <i className="icon icon-arrow-down" /> */}
        </a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            {goldCoins.map((link, index) => (
              <li
                key={index}
                className={`menu-item-li ${
                  pathname.split("/")[1] == link.href.split("/")[1]
                    ? "active"
                    : ""
                } `}
              >
                <Link to={link.href} className="menu-link-text">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
      {/* Coins end */}
      {/* Blog init */}
      <li
        className={`menu-item ${
          [
            ...shopLayout,
            ...shopFeatures,
            ...productStyles,
            ...otherShopMenus,
          ].some((elm) => elm.href.split("/")[1] == pathname.split("/")[1])
            ? "active"
            : ""
        } `}
      >
        <Link to="/shop-collection" className="item-link">
        Collections
        </Link>

        {/* <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="mega-menu-item">
                  <div className="menu-heading">Daily Wear</div>
                  <ul className="menu-list">
                    {shopDailyWear.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mega-menu-item">
                  <div className="menu-heading">Wedding</div>
                  <ul className="menu-list">
                    {shopWedding.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mega-menu-item">
                  <div className="menu-heading">Office Wear</div>
                  <ul className="menu-list">
                    {shopOfficeWear.map((style, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == style.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={style.href} className="menu-link-text">
                          {style.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="mega-menu-item">
                  <div className="menu-heading">Silver</div>
                  <ul className="menu-list">
                    {shopSilverCollection.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="wrapper-sub-shop">
                  <div className="menu-heading">Recent Products</div>
                  <Swiper
                    dir="ltr"
                    className="swiper tf-product-header"
                    slidesPerView={2}
                    spaceBetween={20}
                  >
                    {products
                      .slice(0, 4)
                      .map((elm) => ({
                        ...elm,
                        colors: null,
                      }))
                      .map((elm, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                          <ProductCard1 product={elm} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </li>
      <li
        className={`menu-item ${
          [...productLinks, ...swatchLinks, ...productFeatures].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <Link to="/product-description-menutab/:id" className="item-link">
        Other Jewellery
          {/* <i className="icon icon-arrow-down" /> */}
        </Link>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">For Him (Men’s Collection)</div>
                  <ul className="menu-list">
                    {menJewelry.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Little Treasures (Kids' Collection)                  </div>
                  <ul className="menu-list">
                    {kidsJewelry .map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="mega-menu-item">
                  <div className="menu-heading">Timeless Bonds (Couples' Collection)
                  </div>
                  <ul className="menu-list">
                    {couplesJewelry.map((link, index) => (
                      <li
                        key={index}
                        className={`menu-item-li ${
                          pathname.split("/")[1] == link.href.split("/")[1]
                            ? "active"
                            : ""
                        } `}
                      >
                        <Link to={link.href} className="menu-link-text">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="menu-heading">Best seller</div>
                <div className="sec-cls-header">
                  <div className="collection-position hover-img">
                    <Link to={`/shop-collection`} className="img-style">
                      <img
                        className="lazyload"
                        data-src="/images/collections/cls-header-earrings-2.jpg"
                        alt="banner-cls"
                        src="/images/collections/cls-header-earrings-2.jpg"
                        width={300}
                        height={400}
                      />
                    </Link>
                    <div className="content">
                      <div className="title-top">
                        <h4 className="title">
                          <Link
                            to={`/shop-collection`}
                            className="link text-white wow fadeInUp"
                          >
                            Shop our top picks
                          </Link>
                        </h4>
                        <p className="desc text-white wow fadeInUp">
                          Reserved for special occasions
                        </p>
                      </div>
                      <div>
                        <Link
                          to={`/shop-collection`}
                          className="tf-btn btn-md btn-white"
                        >
                          <span className="text">Shop Now</span>
                          <i className="icon icon-arrowUpRight" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      
      {/* <li
        className={`menu-item position-relative ${
          [...otherPageLinks].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <a href="#" className="item-link">
          Pages
          <i className="icon icon-arrow-down" />
        </a>
        <div className="sub-menu submenu-default">
          <ul className="menu-list">
            {otherPageLinks.map((link, index) => (
              <li
                key={index}
                className={`menu-item-li ${
                  pathname.split("/")[1] == link.href.split("/")[1]
                    ? "active"
                    : ""
                } `}
              >
                <Link to={link.href} className="menu-link-text">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li className="menu-item">
        <a href="https://themeforest.net/user/themesflat" className="item-link">
          Buy Theme
        </a>
      </li> */}
    </>
  );
}
