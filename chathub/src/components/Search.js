import React, { useContext, useState } from "react";
import { collection, query, where, getDoc,getDocs, setDoc, doc, updateDoc, serverTimestamp} from "firebase/firestore";
import { db } from "../firebase";
import {AuthContext} from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const {dispatch} = useContext(ChatContext);


  const {currentUser} = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    }
    catch(err){
      setErr(true)
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async (u)=>{
    // check whether the group(chats in firestore) exists, if not create
    const combinedId = 
    currentUser.uid > user.uid 
    ? currentUser.uid + user.uid 
    : user.uid + currentUser.uid;
    dispatch({type: "CHANGE_USER",payload:u})
    try{
      const res = await getDoc(doc(db, "chats", combinedId));
      if(!res.exists()){
        //create a chat in chats  collection
        await setDoc (doc(db, "chats", combinedId),{messages:[]})

        await updateDoc(doc(db, "userChats", currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid:user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId+ ".date"]: serverTimestamp()
        });
        await updateDoc(doc(db, "userChats", user.uid),{
          [combinedId+".userInfo"]:{
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+ ".date"]: serverTimestamp()
        });
      }
    }catch(err){}

    //create user chats
    setUser(null);
    setUserName("")
  };
  return (
    <div className="search border-b border-gray-600">
      <div className="searchForm ">
        <input
          onKeyDown={handleKey}
          onChange={(e) => setUserName(e.target.value)}
          className=" bg-transparent border-none text-white outline-none h-6 p-5 placeholder:text-gray-400 pl-3"
          placeholder="find a user"
          type="text"
          value={userName}
        />
      </div>
      {err && <span>user not found </span>}
      {user && <div onClick={()=>handleSelect(user)} className="userChat flex items-center p-1 gap-1 cursor-pointer object-cover hover:bg-gray-800">
      <img
        className=" rounded-full w-14 h-14 p-2 object-cover"
        src={user.photoURL}
        alt=""
      />
      <div className="userChatInfo">
        <span className=" text-gray-300">{user.displayName}</span>
      </div>
    </div>}
    </div>
  );
};

export default Search;
