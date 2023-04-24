import React, { useEffect, useState } from "react";
import "./Newsblogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { data } from "autoprefixer";
import Blogpost from "../Blogpost/Blogpost";
import toast from 'react-hot-toast';

const Newsblogs = () => {
  const [newBlogs, setNewsBlogs] = useState([]);
  const [BookMarkCart, setBookMarkCart] = useState([]);
  const [timeMark, setTimeMark] = useState([]);

  useEffect(() => {
    fetch("News.json")
      .then((res) => res.json())
      .then((data) => setNewsBlogs(data));
  }, []);

  const AddToBookMark = (AddToBookMarkBlog) => {
    const checkDoubleBookMark = BookMarkCart.find(
      (p) => p.id === AddToBookMarkBlog.id);

    // const addedBookMark = [...BookMarkCart, AddToBookMarkBlog];
    // setBookMarkCart(addedBookMark);

    if (checkDoubleBookMark) {
       //setBookMarkCart([...BookMarkCart, AddToBookMarkBlog]);
       toast('Already added bookmark.');
    } 
    else {
      const addedBookMark = [...BookMarkCart, AddToBookMarkBlog];
      setBookMarkCart(addedBookMark);
      // // const checkDoubleBookMark = BookMarkCart.find(
      // //   (p) => p.id === AddToBookMarkBlog.id
      // );

    }

    //   if (!checkDoubleBookMark) {
    //     setBookMarkCart([...BookMarkCart, AddToBookMarkBlog]);
    //   } else {
    //     setBookMarkCart([...BookMarkCart, AddToBookMarkBlog]);
    //     //toast messages
    //     toast('Already added in bookmark.');
    //   }
    // }
  };


  // time count when bookmark click
  const handleToTimeMark = (AddToBookMarkBlog) => {
    setTimeMark([...timeMark, AddToBookMarkBlog]);
  };
  // total time spent
  let total = 0;
  for (const totalTime of timeMark) {
    total = total + totalTime.readTime;
  }

  return (
    <div className="Main-Container md:grid-cols-2 sm:grid-cols-1">
      <div>
        {newBlogs.map((newBlog) => (
          <Blogpost
            key={newBlog.id}
            newBlog={newBlog}
            AddToBookMark={AddToBookMark}
            handleToTimeMark={handleToTimeMark}
          ></Blogpost>
        ))}
      </div>

      <div>
        <div className=" bg-base-300 m-auto rounded-xl w-96   mt-4 p-4">
          <div className="text-center p-3 bg-white rounded-xl">
            <p className="font-semibold">Spent time on read : {total} mins</p>
          </div>
          <p className="font-semibold mt-5">
            Bookmarked Blogs :{BookMarkCart.length}
          </p>
          <div className=" p-3 bg-white rounded-xl mt-2">
            <p className="text-sm"></p>
            {BookMarkCart.map((bookTitle) => (
              <p key={bookTitle.id} className="bg-slate-200 text-sm p-6 w-11/12 border m-4 rounded-xl">
                {bookTitle.BlogTitle}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsblogs;
