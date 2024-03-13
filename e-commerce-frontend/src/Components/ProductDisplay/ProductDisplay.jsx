import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  // Thêm state để lưu trữ URL của hình ảnh chính hiện tại
  const [mainImage, setMainImage] = useState(product?.images[4]);
  // const originalMainImage = product.images[4];
  // Hàm để cập nhật hình ảnh chính khi người dùng hover qua các hình ảnh nhỏ
  const handleHover = (imageSrc) => {
    setMainImage(imageSrc);
  };

  // const handleMouseOut = () => {
  //   setMainImage(originalMainImage);
  // };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product?.images.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              onClick={() => handleHover(img)} // Sử dụng onMouseOver để cập nhật hình ảnh
              // onMouseOut={handleMouseOut}
            />
          ))}
        </div>
        <div className="productdisplay-img">
          {/* Hiển thị hình ảnh chính dựa trên state */}
          <img className="productdisplay-main-img" src={mainImage ? mainImage : product?.images[4]} alt="main img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product?.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product?.old_price}</div>
          <div className="productdisplay-right-price-new">${product?.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product?.id) }}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
