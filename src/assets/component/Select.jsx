import React from "react";
import "./select.css";
const Select = (props) => {
  const optionsSelect = props.option.map((optionSelect) => {
    return <option value={optionSelect} className="text-black" > {optionSelect} </option>; //array
  });
  return (
    <>
      <div class="select ">
        <select className="cursor-pointer" style={props.textMode} onChange={props.itemHandle} >{optionsSelect}</select>
      </div>
    </>
  );
};
export default Select;
