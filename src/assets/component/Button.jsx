import React from "react";
import "./button.css"
const Button = (props) => {
  const { nameBtn } = props;
  const buttons = nameBtn.map((btn) => {
    return <button className="border-blue-500 text-white mx-2 px-2 py-2 rounded-md relative w-2/12
    hover:bg-white hover:text-blue-500 transition duration-300 font-semibold b-shadow
    ">{btn}</button>;
  });
  return <div className="flex justify-center">{buttons}</div>;
};

export default Button;
