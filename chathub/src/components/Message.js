import React from "react";

const Message = () => {
  return (
    <div className="message gap-5 flex mb-5 flex-row-reverse items-center">
      <div className="mesageInfo flex flex-col font-thin">
        <img className=' rounded-full h-10 w-10 object-cover' src='https://tse3.mm.bing.net/th?id=OIP.Zu6xBsKbuN86A11j5DW4XQHaLG&pid=Api&P=0&h=180' alt='img'/>
        <span className=" text-white ">Just Now</span>
      </div>
      <div className="messageContent w-1/4">
        <p className=" bg-slate-300 rounded-e-sm rounded-bl-lg h-7">hello</p>
        {/* <img
          className=" rounded-full h-10 w-10 object-cover"
          src="https://tse3.mm.bing.net/th?id=OIP.Zu6xBsKbuN86A11j5DW4XQHaLG&pid=Api&P=0&h=180"
          alt="img"
        /> */}
      </div>
    </div>
  );
};

export default Message;
