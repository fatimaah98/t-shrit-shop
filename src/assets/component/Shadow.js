import React from "react";

const Shadow=(props)=>{
    return(
        <div className="bg-slate-900 opacity-70 fixed z-40 top-0 left-0 w-full h-full" style={props.display}
        onClick={props.hideModal}></div>
    )
}
export default Shadow