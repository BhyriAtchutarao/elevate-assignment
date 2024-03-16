import {Link} from 'react-router-dom'

import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, category, image,rating, price, id,} = productData
  const {rate,count} = rating

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link-item">
        <img src={image} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {category}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rate}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
        <p className="price">Total : {count}   items</p>
      </Link>
    </li>
  )
}
export default ProductCard
