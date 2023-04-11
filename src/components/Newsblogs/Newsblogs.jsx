import React, { useEffect, useState } from "react";
import "./Newsblogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Newssideblog from "../Newssideblog/Newssideblog";
import { data } from "autoprefixer";
import Blogpost from "../Blogpost/Blogpost";

const Newsblogs = () => {
  const [newBlogs, setNewsBlogs] = useState([]);

  const [BlogMarkCart, setBlogMarkCart] = useState([]);

  const [AddTimeMarkCart, setAddTimeMarkCart] = useState([]);
  useEffect(() => {
    fetch("News.json")
      .then((res) => res.json())
      .then((data) => setNewsBlogs(data));
  }, []);

  const AddToBookMark = (newBlog) => {
    // console.log(newBlog);
    const NewBookMark = [...BlogMarkCart, newBlog];
    setBlogMarkCart(NewBookMark);
  };

  const AddToTimeMark =(AddTime)=>{

    const NewAddedTimeMark =[...AddTimeMarkCart, AddTime];
    setAddTimeMarkCart(NewAddedTimeMark);

  }


  return (
    <div className="Main-Container md:grid-cols-2 sm:grid-cols-1">
      <div>
        {newBlogs.map((newBlog) => (
          <Blogpost
            key={newBlog.id}
            newBlog={newBlog}
            AddToBookMark={AddToBookMark}
            AddToTimeMark ={AddToTimeMark}
          ></Blogpost>
        ))}
      </div>
      <div>
        <div>
          <div className=" bg-base-300 m-auto rounded-xl w-96 h-[40rem] sm:h-96 mt-4 p-4">
            <div className="text-center p-3 bg-white rounded-xl">
              <p>Spent time on read : {AddTimeMarkCart.length}</p>
            </div>
            <p className="font-medium mt-5">
              Bookmarked Blogs:{BlogMarkCart.length}
            </p>
            <div className=" p-3 bg-white rounded-xl mt-2">
              <p className="text-sm">
                Master Microsoft Power Platform and Become an In-Demand!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsblogs;
