import React,{useState} from "react";
import Select from "../../component/Select";
import List from "../../component/List";
import { AiOutlineBars } from "react-icons/ai";
import { TiUser } from "react-icons/ti";
import Button from "../../component/Button";
import "./header.css";
import DarkMode from "../../component/DarkMode";
import Modal from "../../component/Modal";
import Login from "../../component/login";
//import MenuBarHidden from "../../component/menuBarHidden";



const Header = (props) => {
 
  const menuItem = ["About", "Contact", "Products"];
  const buttons = ["Women", "Men", "Child"];
  const [modal,setModal]=useState(false)
function showModal() {
setModal(true)
}
function hideModal() {
  setModal(false)
}


/*const [transformMenu,setTransformMenu]=({})
function showMenu() {
setTransformMenu({transform :"translateX(-1%)"})
}
function hideMenu() {
  setTransformMenu({transform:  "translateX(100%)"})
}*/
  return (
    <div >
      <div style={props.bgMode}
      className="flex justify-around w-full mx-auto fixed top-0  py-5 z-30 items-center">
        <div className="flex items-center">
         <DarkMode pageModeHandle={props.pageModeHandle} /> 
          <div className="mx-1">
            <Select option={props.options} textMode={props.textMode} itemHandle={props.itemHandle} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className=" justify-around items-center hidden md:flex">
            <List li={menuItem} textMode={props.textMode} />
            <div className="border-white rounded-full p-1 hover:bg-slate-300 transition duration-300 cursor-pointer b-shadow-user"
            onClick={showModal}>
              <TiUser fontSize="25px" color="#2563eb" />
            </div>
          </div>

          <div className="md:hidden border-white rounded-full p-2 hover:bg-slate-300 transition duration-300 cursor-pointer b-shadow-user"
          >
            <AiOutlineBars fontWeight="800" fontSize="25px" cursor="pointer" />
          </div>
        </div>
      </div>
      <div className="mt-20 bg-blue-500 py-10">
        <h1 className="text-white font-bold my-2 text-4xl">Free Shipping</h1>
        <p className=" text-white font-bold my-5">
          ON ORDERS OVER $50 - USE COUPON CODE OVER50
        </p>
        <div className="">
          <Button nameBtn={buttons} />
        </div>
      </div>
      
    <Modal transform={modal? {transform: "translateX(-1%)"}:{transform: "translateX(200%)"}} display={modal?{display: "block"} : {display:"none"}}
    hideModal={hideModal}>
        <Login/>
    </Modal>
    </div>
  );
};
export default Header;
