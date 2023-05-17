import React, { useState,useEffect } from "react";
import Header from "./assets/layout/header/Header";
import Main from "./assets/layout/main/Main";
import "./App.css";
import Footer from "./assets/layout/footer/footer";
import { back, froth } from "./assets/component/itemImg"; //{images//}
import img1 from "./img/showcase/1.webp";
import img2 from "./img/showcase/2.webp";
import img3 from "./img/showcase/3.webp";

function App() {
  const options= ["all", "black", "pink", "green", "white"];
  const [img, setImg] = useState(false);
  const backImg = back.map((i) => i);
  const frothImg = froth.map((i) => i);
  const [content, setContent] = useState([
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
  ]);
  const[filter,setFilter]=useState(""); // value of select element
  const[arrayHolder,setArrayHolder]=useState([])

  useEffect(()=>{
    setArrayHolder(content) //content=arrayHolder//
  },[])

// when select changed this function called...// 
  function filterItem(e) {
    if(e.target.value!=="all"){
      const newArray=arrayHolder.filter(item=> {
        const colorCloth=item.color.toUpperCase(); 
        const data=e.target.value.toUpperCase()
        return colorCloth.indexOf(data) >-1
      })
      setContent(newArray)
      setFilter(e.target.value)
    }else{
      setContent(arrayHolder)
    }
  }

  const images = [
    {
      imgSrc: img1,
      alignSelf: "flex-end",
      skew: "skew(-15deg)",
      caption: "Fast delivery",
      direction: "row-reverse",
    },
    {
      imgSrc: img2,
      alignSelf: "flex-start",
      skew: "skew(15deg)",
      caption: "Quality product",
      direction: "row",
    },
    {
      imgSrc: img3,
      alignSelf: "flex-end",
      skew: "skew(-15deg)",
      caption: "Cheap buy",
      direction: "row-reverse",
    },
  ];
 const[mode,setMode]=useState(false)
 function pageModeHandle(){
  setMode(!mode)
 }

 const lightClasses={
  backgroundColor: "rgb(226 232 240)"
}
const darkMode={
  backgroundColor: "#1e293b"
}
const lightText={
  color: "white"
}
const darkText={color: "black"}
const darkPage={backgroundColor: "#082f49"}
const lightPage={backgroundColor:"white"}
const bgLPrice={backgroundColor:"rgba(120, 165, 165, 0.486)",color:"blue"}
const bgDPrice={backgroundColor: "rgba(6, 36, 36, 0.753)",color:"#b8b7f8"}
const textDarkFooter={color:"#082f49"}


  return (
    <div className="App" style={mode?darkPage:lightPage}>
      
      <Header options={options} itemHandle={filterItem} textMode={mode?lightText:darkText}
       bgMode={ mode? darkMode : lightClasses} pageModeHandle={pageModeHandle} />
      <Main images={images} content={content} textColor={mode? lightText:darkText} stylePrice={mode?bgDPrice:bgLPrice } />
      
      <Footer colorTextFoot={mode? textDarkFooter:lightText}/>
    </div>
  );
}

export default App;
