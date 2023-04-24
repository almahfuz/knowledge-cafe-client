import React from "react";

const Navbar = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">News Cafe</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="active:bg-neutral-400">Home</a>
            </li>
            <li>
              <a className="active:bg-neutral-400">About</a>
            </li>
            <li>
              <a className="active:bg-neutral-400">Blogs</a>
            </li>
          </ul>

          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
