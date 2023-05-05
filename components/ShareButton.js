import React from "react";
import { useRouter } from "next/router";

const ShareButton = () => {
    const  router = useRouter();
    const copyLink = () => {


    }
    return(
    <>
       <div className="flex flex-row justify-center my-9">
       <img classname="w-10" src="/svg/send.svg" alt="share"/>
       <p className="ml-3">Click to share</p>
       </div>
    </>
    )
   
}

export default ShareButton;