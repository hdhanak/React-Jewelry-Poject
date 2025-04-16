import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import Breadcumb from "@/components/productDetails/Breadcumb";
import DescriptionTab from "@/components/productDetails/descriptions/DescriptionTab";
import Details1 from "@/components/productDetails/details/Details1";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import { allProducts } from "@/data/products";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import Header10 from "@/components/headers/Header10";
import axios from "axios";
const metadata = {
  title:
    "Product Description Menutab || Modave - Multipurpose Reactjs eCommerce Template",
  description: "Modave - Multipurpose Reactjs eCommerce Template",
};

export default function ProductDescriptionMenutabPage() {
  let params = useParams();
  const id = params.id;
  console.log(id,"id");
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fetch product details
  const fetchProductById = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/v1/admin/get-product-by-id", { id });
      setProduct(response.data.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching product:", err);
      setError("Failed to load product details.");
      setLoading(false);
    }
  };

  // Call API when `id` changes
  useEffect(() => {
    if (id) fetchProductById();
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;
  // const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  console.log(product,"product detail");
  
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6 bgColor="bg-main" />
      <Header10 />
      <Breadcumb product={product} />
      <Details1 product={product} />
      {/* <DescriptionTab /> */}
      <RelatedProducts />
      <Footer1 hasPaddingBottom />
    </>
  );
}
