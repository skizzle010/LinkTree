import { Router } from "next/router";
import React from "react";
import { useRouter } from "next/router";
import { delay, motion } from "framer-motion";
import Link from "next/link";

const UserHeader = ({ data }) => {
  const {role, handle, avatar, links } = data;
  const router = useRouter();
  return (
    <>
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row p-5">
          <Link href="/edit/links">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="inline-flex w-full md:w-auto px-5 py-3 text-red-500 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 border-2 border-red-500"
            >
              <img src="/svg/link-edit.svg" className="w-6 mr-3" />
              Edit Links
            </motion.button>
          </Link>
          <Link href="/edit/profile">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="inline-flex w-full md:w-auto px-5 py-3 text-blue-500 font-bold hover:text-blue-700 hover:bg-blue-100 rounded-md mb-3 border-2 border-blue-500  md:ml-4"
            >
              <img src="/svg/profile.svg" className="w-6 mr-3" />
              Edit profile
            </motion.button>
          </Link>
        </div>
        <div className="mb-4 flex flex-row">
          <div className="inline-flex mr-5 text-left items-center bg-gray-200 px-5 py-2 rounded-lg cursor-pointer" onClick={()=>{router.push(`./${handle}`)}}>
            <div className="text-xs md:text-md flex flex-col flex-wrap w-16">
              <span className="font-bold">{handle} </span>
              <span>{role}</span>
            </div>

            <div className="user-img ml-3" >
              {!avatar ? (
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  src="/svg/user.svg"
                  className="w-7 h-8 rounded-full"
                />
              ) : (
                <img src={avatar} className="w-7 h-8 rounded-full" />
              )}
            </div>
          </div>
          <div className="uefhiquef h-7 w-7 mt-2.5 mr-16 flex flex-row">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="h-11 cursor-pointer pb-4 "
              src="/svg/noti.svg"
            />
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="h-7 ml-4 cursor-pointer"
              src="/svg/logout.svg "
              onClick={() => {
                localStorage.clear();
                router.push("/login");
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;
