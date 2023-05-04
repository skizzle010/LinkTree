import React, { useEffect } from "react";
import LinkBox from "../components/LinkBox";
import UserHeader from "../components/UserHeader";

const dashboard = () => {
  useEffect(()=>{
    if(!localStorage.getItem("LinkTreeToken"))return window.location.href ="/login"
  },[])
  return (
    <>
      <div className="">
        <UserHeader>UserHeader</UserHeader>
        <span className="header"></span>
        <main>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5  "> 
            <LinkBox lbTitle="Links" lbNumber="12" lbSvg="links.svg" lbTheme="red"/>
            <LinkBox lbTitle="Growth" lbNumber="30%" lbSvg="report.svg" lbTheme="blue"/>
            <LinkBox lbTitle="Links" lbNumber="12" lbSvg="links.svg" lbTheme="red"/>
            <LinkBox lbTitle="Growth" lbNumber="30%" lbSvg="report.svg" lbTheme="blue"/>
          </section>
          
          <section></section>
        </main>
      </div>
    </>
  );
};

export default dashboard;
