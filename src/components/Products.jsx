import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import {STATUSES} from "../store/productSlice"

const Products = () => {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector((state) => state.product)
  // const [products, setProducts] = useState([]);

  useEffect(() => {

    dispatch(fetchProducts())

    // const fetchPro = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchPro();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
};

if(status === STATUSES.LOADING) {
  return <h2>Loading...</h2>
}
if(status === STATUSES.ERROR) {
  return <h2>Oops! Something went wrong</h2>
}

  return (
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <div className="card-data">
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
          </div>
          <button onClick={() => handleAdd(product)} className="pro-btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
