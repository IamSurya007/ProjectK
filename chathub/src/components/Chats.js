import React, { useContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      }
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect=(u)=>{
    dispatch({type: "CHANGE_USER",payload:u})
  };


  return (
    <div className="chats">
      {chats && Object.entries(chats)?.sort((a,b)=>b[1].date-a[1].date).map((chat)=>(
        <div key={chat[0]} onClick={()=> handleSelect(chat[1].userInfo)} className="userChat flex items-center p-1 gap-1 cursor-pointer object-cover hover:bg-gray-800">
        <img
          className=" rounded-full w-14 h-14 p-2 object-cover"
          src={chat[1].userInfo?.photoURL}
          alt=""
        />
        <div className="userChatInfo">
          <span className=" text-gray-400">{chat[1].userInfo?.displayName}</span>
          <p className=" text-gray-300">{chat[1].lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Chats;