import React from "react";
// we need item
import Item from "./Item";
import "./scss/css/items.css";
//import { back, froth } from "./itemImg"; //{images//}

const Items = (props) => {
  //const [img, setImg] = useState(false);

  //const backImg = back.map((i) => i);
 // const frothImg = froth.map((i) => i);

  /*const content = [
    {
      title: "Cool spring t-shirt for hot weather",
      price: "3000 $",
      imgSrc: img ? backImg[0] : frothImg[0],
      color: "white",
    },
    {
      title: "Cool spring t-shirt for hot weather",
      price: "3000 $",
      imgSrc: img ? backImg[1] : frothImg[1],
      color: "white",
    },
    {
      title: "Cool spring t-shirt for hot weather",
      price: "3000 $",
      imgSrc: img ? backImg[2] : frothImg[2],
      color: "black",
    },
    {
      title: "Cool spring t-shirt for hot weather",
      price: "3000 $",
      imgSrc: img ? backImg[3] : frothImg[3],
      color: "white",
    },
    {
      title: "Cool spring t-shirt for hot weather",
      price: "3000 $",
      imgSrc: img ? backImg[4] : frothImg[4],
      color: "pink",
    },
    {
      title: "Cool spring t-shirt for hot weather",
      price: "3000 $",
      imgSrc: img ? backImg[5] : frothImg[5],
      color: "green",
    },
    {
      title: "Cool spring t-shirt for hot weather",
      price: "3000 $",
      imgSrc: img ? backImg[6] : frothImg[6],
      color: "white",
    },
    {
      title: "Cool spring t-shirt for hot weather",
      price: "3000 $",
      imgSrc: img ? backImg[7] : frothImg[7],
      color: "white",
    },
  ];
*/
  const items = props.content.map((item) => {
    return <Item src={item.imgSrc} title={item.title} price={item.price} stylePrice={props.stylePrice} />;
  });


  return (
    <>
      <div className="font-bold new" style={props.textColor}>New</div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mx-5 mt-64">
        {items}
      </div>
    </>
  );
};
export default Items;
