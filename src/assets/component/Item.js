import React from "react";
import "./scss/css/item.css";
import { BsCartPlusFill } from "react-icons/bs";

const Item = (props) => {
  return (
    <>
      <div
        className="relative item"
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
      >
        <img src={props.src} alt="" className="img" />
        <div className="title"> {props.title} </div>
        <div className="price flex justify-between items-center mt-2" style={props.stylePrice}>
          <BsCartPlusFill
          color="#0e6faf" 
          fontSize="25px"
          cursor="pointer"
          /> {props.price}
        </div>
      </div>
    </>
  );
};
export default Item;
