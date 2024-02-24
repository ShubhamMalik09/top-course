import React from "react";

const Spinner = ()=>{
    return (
        <div className=" flex flex-col items-center space-y-2">
            <img src="https://cdn.dribbble.com/users/807926/screenshots/3629667/loadingtwo.gif"/>
            <p className=" text-blue-950 text-lg font-semibold">Loading....</p>
        </div>
    )
}

export default Spinner;