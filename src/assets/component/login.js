import React from "react";

const Login=(props)=>{
    return(
        <>
            <form action="" className="flex flex-col px-5 ">
                <input type="text" placeholder="UserName" className="mb-5 py-5 px-5 outline-0 rounded-lg" />
                <input type="email" placeholder="Email" className="mb-5 py-5 px-5 outline-0 rounded-lg" />
                <button className="cursor-pointer bg-emerald-900 text-white font-bold py-5 hover:bg-emerald-700 transition duration-400 rounded-lg" >
                    Submit
                </button>
            </form>
        </>
    )
}
export default Login