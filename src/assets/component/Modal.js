import React from "react";
import "./scss/css/modal.css";
import Shadow from "./Shadow";
const Modal = (props) => {
  return (
    <>
   <Shadow display={props.display} hideModal={props.hideModal}/>
    <div className="fixed z-50 rounded-md py-10 modal" style={props.transform}>
    {props.children}
    </div>
    </>
  );
};
export default Modal;
