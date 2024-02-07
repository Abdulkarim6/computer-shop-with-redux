import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";

const MyCart = () => {
  const carts = useSelector((state) => state.cart);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
      {carts.sort((a,b)=> a._id - b._id).map((cart, i) => (
        <ProductCart key={i} product={cart}></ProductCart>
      ))}
    </section>
  );
};

export default MyCart;
