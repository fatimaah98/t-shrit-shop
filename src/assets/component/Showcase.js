import React, { useState } from "react";
import "./showcase.css";

const Showcase = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        alignSelf: props.alignSelf,
        transform: hover ? props.skew : null,
        flexDirection: props.direction
      }}
      className="mt-36 mx-auto bg-white showcase flex cursor-pointer w-9/12 sm:justify-between"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={props.imgSrc}
        alt=""
        className="rounded-full w-72 h-72 align-self-center"
      />
      <div className="h-full my-auto">
        <p className="font-bold text-4xl caption">
         {props.caption}
        </p>
      </div>
    </div>
  );
};
export default Showcase;
