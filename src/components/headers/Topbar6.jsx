import React from "react";
import { Link } from "react-router-dom";
import CurrencySelect from "../common/CurrencySelect";
import LanguageSelect from "../common/LanguageSelect";
export default function Topbar6({ bgColor = "bg-blue-2" }) {
  return (
    <div className={`tf-topbar ${bgColor}`}>
      <div className="container">
        <div className="tf-topbar_wrap d-flex align-items-center justify-content-center justify-content-xl-between">
          <ul className="topbar-left">
            <li>
              <a className="text-caption-1 text-white" href="tel:+91 98765 43210">
              +91 98765 43210
              </a>
            </li>
            <li>
              <a className="text-caption-1 text-white" href="#">
              shreeganeshjewellers@gmail.com
              </a>
            </li>
            {/* <li>
              <Link
                className="text-caption-1 text-white text-decoration-underline"
                to={`/store-list`}
              >
                Our Store
              </Link>
            </li> */}
          </ul>
          <div className="topbar-right d-none d-xl-block">
            <div className="tf-cur justify-content-end">
            <Link
                className="text-caption-1 text-white text-decoration-underline"
                to={`/store-list`}
              >
                Our Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
