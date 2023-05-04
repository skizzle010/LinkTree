import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LinkTree from "../components/LinkTree";

const handle = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);
  useEffect(() => {
    if (router.query?.handle) {
      fetch(`http://localhost:8080/get/${router.query.handle}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "error") {
            return toast.error(data.error);
          }
          if (data.status === "success") {
            setData(data.userData);
            setUserFound(true);
            console.log(data.userData)
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
            <div className="not-found px-3">
                <h1>User not Found 😔</h1>
                <br/>
                <p>Check the spelling again!!</p>
            </div>
        </div>
    )
  }     
  return (
    <div>
      <LinkTree data={data} />
    </div>
  );
};

export default handle;
