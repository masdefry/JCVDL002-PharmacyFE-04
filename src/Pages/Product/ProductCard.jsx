import React from "react";
import "./Product.css";
import { API_FE } from "../../Supports/Constants/UrlAPI";
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  render() {
    return (
      <div>
        <div className="product-card">
          <Link to={`/products/product-detail/${this.props.productData.SKU}`}>
            <div className="product-img">
              <img src={this.props.productData.Image} alt="" />
            </div>
            <div className="product-description">
              <h4> {this.props.productData.Name}</h4>
              <h3>Rp{this.props.productData.Price.toLocaleString("id")}</h3>
              <p className="star-count">
                <span className="star-emoji">⭐</span> 5,0
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductCard;
