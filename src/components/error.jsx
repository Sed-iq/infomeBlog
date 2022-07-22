import React, { useState, useEffect } from "react";
import Err from "./../../public/err.png";
function Error() {
  return (
    <div className="w-full sm:h-2/4 p-4">
      <div className="h-44  p-4 sm:sticky sm:top-44 flex flex-col items-center ">
        <img src={Err} alt="" className=" animate-ping w-12 sm:w-16" />
        <h2 className=" text-4xl font-bold apple mt-5">Not Found</h2>
      </div>
    </div>
  );
}
export default Error;
