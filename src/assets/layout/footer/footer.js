import React from "react";
import "./css/footer.css";
import ListFooter from "../../component/listFooter";

const Footer = (props) => {
    const data=[
        {
            title:"Contact:",
            list:[
                "address: Qom :)",
                "Phone: 09123456789",
               "Email: Nassarifa98@gmail.com"
            ]
        },
        {
            title: "About",
            list:["I can Build Any Website That You Want!"]
        }
    ]
    const allData=data.map(data=> {
        return <ListFooter title={data.title} list={data.list} colorTextFoot={props.colorTextFoot}/>
    })
  return (
    <>
      <div className="svg mt-10 footer ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,256L60,234.7C120,213,240,171,360,154.7C480,139,600,149,720,170.7C840,192,960,224,1080,229.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <div className="bg-blue-footer flex justify-center">
          <div className="flex">
           {allData}
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
