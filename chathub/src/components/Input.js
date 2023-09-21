import React, { useContext, useState, useSyncExternalStore } from "react";
import { GrAttachment } from "react-icons/gr";
import { AiOutlineSend } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import "../pages/styles.css";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import {v4 as uuid} from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {

  const [text, setText] = useState("")
  const [img, setImg]= useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async ()=>{
    if(img){
      const storageRef = ref(storage, uuid());
      
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          console.log(error)
        },
         () => {
           getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId),{
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              })
            })
          });
        }
      );
    }else{
      await updateDoc(doc(db, "chats", data.chatId),{
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db,"userChats",currentUser.uid),{
      [data.chatId+ "lastMessage"]:{
        text
      },
      [data.chatId+".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db,"userChats",data.user.uid),{
      [data.chatId+ "lastMessage"]:{
        text
      },
      [data.chatId+".date"]: serverTimestamp(),
    });
    setText("");
    setImg(null);
  }

  return (
    <div className="input bg-white h-14 flex items-center justify-between text-lg pl-2">
      <label className="hover:bg-gray-500 p-2 rounded-sm " htmlFor="">
        <GrEmoji className="text-2xl" />
      </label>
      <input
        className=" w-5/6 outline-none"
        type="text"
        placeholder="Type Something"
        onChange={e=>setText(e.target.value)}
        value={text}
      />
      <div className="send flex gap-1 items-center pr-4">
        <input type="file" style={{ display: "none" }} id="file" onChange={e=>setImg(e.target.files[0])} />
        <label className="hover:bg-gray-500 p-2 rounded-sm" htmlFor="file">
          <GrAttachment className="text-2xl" />
        </label>
        <button onClick={handleSend} className="hover:bg-gray-500 p-2 rounded-sm">
          <AiOutlineSend className=" text-2xl " />
        </button>
      </div>
    </div>
  );
};

export default Input;
