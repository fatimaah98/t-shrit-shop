import React from "react";

const ListFooter=(props) =>{

    const lists=props.list.map(list=> {
        return <li style={props.colorTextFoot}>{list}</li>
    })
    /*
    <li className="text-white">address: Qom :) </li>
                <li className="text-white">Phone: 09123456789</li>
                <li className="text-white">Email: Nassarifa98@gmail.com</li>*/ 
    return(
        <div className="mx-16">
             <h3 className="font-semibold " style={props.colorTextFoot}>{props.title}</h3>
            <ul className="flex flex-col items-start">
                {lists}
            </ul>
        </div>
    )
}
export default ListFooter