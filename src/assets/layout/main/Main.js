import React from "react";
import Showcase from "../../component/Showcase";
//import img1 from "../../../img/showcase/1.webp"
//import img2 from "../../../img/showcase/2.webp"
//import img3 from "../../../img/showcase/3.webp"
import Items from "../../component/Items";
const Main =(props)=>{
    const img=props.images.map(image=>{
      return <Showcase imgSrc={image.imgSrc} alignSelf={image.alignSelf} skew={image.skew} caption={image.caption.toUpperCase()}
      direction={image.direction} />
    })
    return(
      <>
        <div className="flex flex-col items-center" >
        {img }
        </div>
        <Items content={props.content} textColor={props.textColor} stylePrice={props.stylePrice}/>
        </>
    )
}
export default Main;