import React from "react";
import List from "./List";
import Shadow from "./Shadow";
import "./scss/css/MenuBar.css"
const MenuBarHidden=(props)=>{

    const list=["Contact","About","Products", "Login"]
    return(
        <div className="bg-white fixed right-0 top-0 px-32 rounded-md z-40 py-10"
        style={props.transform}>
            <Shadow hideModal={props.hideMenu}/>
    <List li={list} direction={{flexDirection: "column"}}/>
        </div>
    )
}
export default MenuBarHidden