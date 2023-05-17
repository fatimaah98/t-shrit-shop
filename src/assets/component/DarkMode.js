import React from "react";

const DarkMode=(props)=>{
    return(
        <div className="checkbox-wrapper-54 mr-2">
        <label className="switch" >
          <input type="checkbox" className=""  onClick={props.pageModeHandle}/>
          <span className="slider"></span>
        </label>
      </div>
    )
}
export default DarkMode