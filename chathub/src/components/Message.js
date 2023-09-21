import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  console.log(message)
  return (
    
    <div className="message gap-5 flex mb-5 flex-row-reverse ">
      {/* <div className="mesageInfo flex flex-col font-thin">
        <img className=' rounded-full h-8 w-8 object-cover' src={message.senderId === currentUser.uid ? currentUser.photoURL:data.user.photoURL} alt='img'/>
        <span className=" text-white">Just Now</span>
      </div>
      <div className="messageContent">
        <p className=" bg-slate-300 rounded-md pr-10 pl-1 h-7">{message.text}</p>
        {message.img && 
        <img
          className=" rounded-full h-10 w-10 object-cover"
          src={message.img}
          alt=""
        />
        }
      </div> */}
    </div>
  );
};

export default Message;
