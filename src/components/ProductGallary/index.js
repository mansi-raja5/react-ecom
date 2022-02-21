import React, { useState } from "react";
import "./style.scss";

const ProductGallary = (props) => {
  const [mainImg, setMainImg] = useState(
    props.gallery[0] ? props.gallery[0] : "noimg.png"
  );
  const changeGallaryMainImage = (event) => {
    setMainImg(event.target.src);
  };
  return (
    <div className="row">
      <div className="col-md-1">
        <div className="thumbnail text-center">
          {props.gallery.map((galleryImg, index) => (
            <img
              onClick={changeGallaryMainImage}
              src={galleryImg}
              alt={props.productName}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="col-md-11">
        <img id="main-image" src={mainImg} alt={props.productName} />
      </div>
    </div>
  );
};

export default ProductGallary;
