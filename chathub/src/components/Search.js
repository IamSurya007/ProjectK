import React from "react";

const Search = () => {
  return (
    <div className="search border-b border-gray-600">
      <div className="searchForm ">
        <input className=" bg-transparent border-none text-white outline-none placeholder:text-gray-400 pl-3" placeholder="find a user" type="text" />
      </div>
      <div className="userChat flex items-center p-1 gap-1 cursor-pointer object-cover hover:bg-gray-800">
        <img
          className=" rounded-full w-14 h-14 p-2 object-cover"
          src="https://tse3.mm.bing.net/th?id=OIP.Zu6xBsKbuN86A11j5DW4XQHaLG&pid=Api&P=0&h=180"
          alt=""
        />
        <div className="userChatInfo">
          <span className=" text-gray-300">Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
