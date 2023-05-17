import React from "react";
import './list.css'
const List = (props) => {
  const lists = props.li.map((list) => {
    return <li style={props.textMode}
     className="mx-2 font-semibold cursor-pointer
    hover:text-blue-800 transition duration-300 hover:bg-slate-400 hover:b-shadow-list rounded-md py-2 px-1
    ">{list}</li>;
  });
 
  return (
    <>
      <ul className="flex" style={props.direction}
      >{lists}</ul>
    </>
  );
};
export default List;
