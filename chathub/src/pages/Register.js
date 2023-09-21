import React from "react";
import "./styles.css";
import { BiImageAdd } from "react-icons/bi";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db} from "../firebase";
import { useState } from "react";
import {ref, uploadBytesResumable,getDownloadURL,} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore"
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);
      
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      //Register three observer
      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db,"users", res.user.uid),{
              uid: res.user.uid,
              displayName,
              email,
              photoURL:downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid),{});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className=" bg-blue-300 h-screen flex items-center justify-center align-middle">
      <div className=" bg-white py-5 px-16 rounded-lg items-center flex flex-col gap-2">
        <span className=" font-bold text-lg">ChatHub</span>
        <span className=" font-semibold">Register</span>
        <form
          className=" flex flex-col gap-4 border-solid"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className=" placeholder-grey-200"
            placeholder="display name"
          />
          <input
            type="eamil"
            className=" placeholder-grey-200 "
            placeholder="email"
          />
          <input
            type="password"
            className=" placeholder-grey-200 "
            placeholder="password"
          />
          <input
            type="file"
            className=" placeholder-grey-200 "
            style={{ display: "none" }}
            id="file"
          />
          <label className=" flex items-center" htmlFor="file">
            <BiImageAdd className="text-3xl" />
            <span>Add an avatar</span>
          </label>
          {err && <span>Something went wrong</span>}
          <button className=" bg-blue-500 p-3 rounded-md text-white font-bold" type="submit">
            Sign Up
          </button>
        </form>
        <p className="">You have an account?<Link to="/login">Login</Link> </p>
      </div>
    </div>
  );
};

export default Register;