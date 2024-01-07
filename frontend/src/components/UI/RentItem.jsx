import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/rent-item.css";

const RentItem = (props) => {

  const { imgUrl, model, rentName, size, wifi, price } = props.item;

 

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="rent__item">

        <div className="rent__img">

          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="rent__item-content mt-4">
          <h4 className="section__title text-center">{rentName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="rent__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-home-smile-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-drag-move-line"></i> {size}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-wifi-line"></i> {wifi}
            </span>
          </div>

          <button className=" w-50 rent__item-btn rent__btn-rent">
            <Link to={`/rent/${rentName}`}>Rent</Link>
          </button>

          <button className=" w-50 rent__item-btn rent__btn-details">
            <Link to={`/rent/${rentName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default RentItem;
