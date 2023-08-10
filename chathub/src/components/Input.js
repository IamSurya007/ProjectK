import React from "react";
import { IoIosAttach } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
import {AiOutlineSend} from 'react-icons/ai'

const Input = () => (
  <div className=" bg-white h-14 flex items-center justify-between text-lg">
    <input
      className=" w-3/4 pl-2 outline-none"
      type="text"
      placeholder="Type Something"
    />
    <div className="send flex gap-6 items-center pr-6">
        <input type="file" style={{display: "none"}} id="file"/>
        <label className="" htmlFor="file"><IoIosAttach className="text-3xl" /></label>
        <label htmlFor="file">
        <IoImageOutline className="text-3xl" />
        </label>
        <button><AiOutlineSend className=" text-3xl"/></button>
      </div>
  </div>
);

export default Input;