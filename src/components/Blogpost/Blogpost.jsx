import React from "react";
import "./Blogpost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { data } from "autoprefixer";

const Blogpost = (props) => {
  const { id, authorName, blogCoverImage, publishDate, authorImage, BlogTitle,readTime
  } = props.newBlog;
//   console.log(props);
 const AddToBookMark =props.AddToBookMark;

const handleToTimeMark =props.handleToTimeMark;

  return (
    <div>
      <div className="flex justify-around flex-wrap ">
        <div className="mt-4 w-full bg-white  shadow-md overflow-hidden md:max-w-2xl">
          <div className="bg-sky-300">
            <img
              src={blogCoverImage}
              className=" max-h-[18rem] w-full object-fill bg-cover bg-center"
            />
          </div>
          <div className="flex justify-between items-center mt-4 px-[2rem]">
            <div className="flex items-center">
              <img
                className="items-center w-10 h-10  rounded-full"
                src={authorImage}
                alt=""
              />
              <div className="ps-4 p-2">
                <h4 className="font-semibold"> {authorName}</h4>
                <p className="font-light text-xs">{publishDate}</p>
              </div>
            </div>
            <div>
              <p className="font-light text-xs">
                {readTime} min read <button onClick={() => AddToBookMark(props.newBlog)}> <FontAwesomeIcon icon={faBookmark} /> </button> 
              </p>
            </div>
          </div>

          <div className="px-5 py-2">
            <div className=" h-[8rem]  max-h-[12rem]">
              <p className="text-2xl font-bold leading-6">
                {BlogTitle}
              </p>
            </div>
            <div className="tag-className">
              <p>
               
                <span className="font-medium text-xs">#beginners</span>
                <span className="font-medium text-xs">#programming</span>
              </p>
            </div>
            <p className="mt-4 text-xs ">
               <button className=" hover:bg-slate-100 p-2 rounded-lg "  onClick={()=>handleToTimeMark(props.newBlog)}>Mark as read</button> 
            </p>
          </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default Blogpost;
