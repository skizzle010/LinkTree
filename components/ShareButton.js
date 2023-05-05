import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ShareButton = () => {
    const  router = useRouter();
    const copyLink = () => {
        navigator.clipboard.writeText(`https://localhost:3000/${router.query.handle}`)
        toast.success('Link copied to clipboard')

    }
    return(
    <>
       <div className="flex flex-row justify-center my-9" onClick={copyLink}>
       <img classname="w-10" src="/svg/send.svg" alt="share"/>
       <p className="ml-3">Click to share</p>
       </div>
    </>
    )
   
}

export default ShareButton;