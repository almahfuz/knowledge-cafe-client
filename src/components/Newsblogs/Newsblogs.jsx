import React from "react";

const Newsblogs = () => {
  return (

    <div >
      <div className="flex justify-around flex-wrap " >
        <div className="mt-4 w-md bg-white  shadow-md overflow-hidden md:max-w-2xl">
          <div className="bg-sky-300">
            <img
              src="https://images.unsplash.com/photo-1597557316084-d7f32839141e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              className="object-fill bg-cover bg-center"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex">
              <img
                className="w-16 h-16 ms-4"
                src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className=" p-2">
                <h4> Mr.Raju</h4>
                <p>Mar 14 (4days ago)</p>
              </div>
            </div>
            <div>
              <p>05 min read Icon</p>
            </div>
          </div>
        </div>
        <div className=" bg-slate-700 w-96 h-[40rem] sm:h-96 mt-4 "> hello</div>
      </div>

      
    </div>
  );
};

export default Newsblogs;
