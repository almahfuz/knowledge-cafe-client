import React, { useEffect, useState } from "react";

const Newssideblog = ({ BlogMarkCart }) => {
  



  return (
    <div>
      <div className=" bg-base-300 m-auto rounded-xl w-96 h-[40rem] sm:h-96 mt-4 p-4">
        <div className="text-center p-3 bg-white rounded-xl">
          <p>Spent time on read : 177 min</p>
        </div>
        <p className="font-medium mt-5">
          Bookmarked Blogs :{}
        </p>
        <div className=" p-3 bg-white rounded-xl mt-2">
          <p className="text-sm"> {}</p>
        </div>
      </div>
    </div>
  );
};

export default Newssideblog;
