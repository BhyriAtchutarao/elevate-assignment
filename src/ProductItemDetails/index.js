import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {Audio} from 'react-loader-spinner'
import "./index.css"


const ProductItemDetails = () => {
  const [productDetails, updateProductDetails] = useState(null); // intilize the productDetails as null in useState
  const { id } = useParams(); //taken id while clicking on Product card Route by useParams 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {  
      const apiUrl = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      updateProductDetails(data); //updating the useState with api response after success runs api 
    };
    fetchData();
  }, [id]); // Added id to the dependency array to re-fetch data when id changes

  if (!productDetails) { // using Loader while api fetching going on 
    return <div className="products-loader-container" data-testid="loader">
    <Audio type="ThreeDots" color="#0b69ff" height="50" width="50" />
  </div>
  }

  const backToProductRoute = (e)=>{
    e.preventDefault()
    navigate("/products") 
  }

  const { title, price, description, rating, category, image } = productDetails;
  const { rate, count } = rating;

  return (
    <div className="product-item-details-container">
      <div>
        <img className="product-image" src={image} alt={title} />
        <div className="button-cont" >
          <button className="products-button" onClick={backToProductRoute}>Products</button>
          <button className="buyNow-button">Buy Now</button>
        </div>
      </div>
      <div className="right-container">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price-para">Rs- {price}/-</p>
        <p>Total : {count} items</p>
        <div className="rating-containers">
          <p className="ratings">{rate}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="stars"
          />
        </div>
        <p>{description}</p> 
      </div>
    </div>
  );
};

export default ProductItemDetails;




