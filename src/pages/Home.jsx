import React, { useEffect, useState } from "react";
import ProductCart from "../components/ProductCart";
import { useSelector } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const state = useSelector((state) => state);
  // console.log(state);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
      {products.map((product, i) => (
        <ProductCart key={i} product={product}></ProductCart>
      ))}
    </section>
  );
};

export default Home;
