import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LinkTree from "../components/LinkTree";
import Link from "next/link";
import SocialTree from "../components/SocialTree";
import ShareButton from "../components/ShareButton";

const handle = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);
  const [social, setSocial] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    github: "",
  });
  useEffect(() => {
    if (router.query?.handle) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/get/${router.query.handle}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "error") {
            return toast.error(data.error);
          }
          if (data.status === "success") {
            setData(data.userData);
            setUserFound(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router.query]);

  useEffect(() => {
    if (router.query?.handle) {
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/get/socials/${router.query.handle}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.status === "error") {
              return toast.error(data.error);
            }
            if (data.status === "success") {
              setSocial(data);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
  }, [router.query]);

  if(!userFound){
    return (
        <div> 
            <div className="flex justify-center items-center h-screen ">
                <h1 className="font-bold text-lg">User not Found 😔</h1>
                <p className="ml-2">Check the spelling again!!</p>
                <p className="ml-2">Create your own</p><Link className="bg-indigo-600 px-2 ml-2 text-white hover:bg-indigo-300 transition-all duration-500" href="/apply">LinkTree</Link>
            </div>
        </div>
    )
  }     
  return (
    <div>
      <LinkTree data={data} />
      <SocialTree social={social}/>
      <ShareButton/>
    </div>
  );
};

export default handle;
