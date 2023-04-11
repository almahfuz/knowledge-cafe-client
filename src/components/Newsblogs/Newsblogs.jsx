import React from "react";
import './Newsblogs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Newssideblog from "../Newssideblog/Newssideblog";
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
          <div className="flex justify-between items-center mt-4 px-[2rem]">
            <div className="flex items-center">
              <img
                className="items-center w-10 h-10  rounded-full"
                src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="ps-4 p-2">
                <h4 className="font-semibold"> Mr.Raju</h4>
                <p className="font-light text-xs">Mar 14 (4days ago)</p>
              </div>
            </div>
            <div>
              <p className="font-light text-xs">05 min read <FontAwesomeIcon icon={faBookmark} /></p>
            </div>
            


          </div>

          <div className="px-5 py-2">
          <div className=" h-[12rem]  max-h-[20rem]">
                <p className="text-2xl font-bold leading-3">How to get your first job as a self-taught programmer</p>
            </div>
            <div className="tag-className ">
                <p> <span className="font-medium text-xs">#beginners</span> <span className="font-medium text-xs">#programming</span></p>
            </div>
            <p className="mt-4 text-xs"><a href="#">Mark as read</a></p>
          </div>
          
        </div>

       {/* right side dynamic bar  */}
       <Newssideblog></Newssideblog>

        </div>
        
      </div>

      
   
  );
};

export default Newsblogs;
