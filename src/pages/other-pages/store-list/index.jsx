import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import StoreLocations1 from "@/components/otherPages/StoreLocations1";
import React from "react";
import { Link } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import Header10 from "@/components/headers/Header10";
import StoreLocations2 from "@/components/otherPages/StoreLocations2";
import StoreLocations3 from "@/components/otherPages/StoreLocations3";
const metadata = {
  title: "Store List || Modave - Multipurpose Reactjs eCommerce Template",
  description: "Modave - Multipurpose Reactjs eCommerce Template",
};

export default function StorelistPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6 bgColor="bg-main" />
      <Header10 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Store Location</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" to={`/`}>
                    Homepage
                  </Link>
                </li>
                {/* <li>
                  <i className="icon-arrRight" />
                </li>
                <li>
                  <a className="link" href="#">
                    Pages
                  </a>
                </li> */}
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Store Location</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <StoreLocations3 />
      <Footer1 />
    </>
  );
}
