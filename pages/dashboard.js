import React, { useEffect } from "react";

const dashboard = () => {
  // useEffect(()=>{
  //   if(!localStorage.getItem("LinkTreeToken"))return window.location.href ="/login"
  // },[])
  return (
    <>
      <div className="">
        <span className="header"></span>
        <main>
          <section> 
            <div className="flex items-center">
              <div className="bg-red-400 inline-flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-full mr-6">
                <img src='/svg/iconmonstr-link-thin.svg' className="w-6"/>
              </div>
              <div className=""> 
              <span className="inline-block text-2x1 font-bold">5</span>
              <span className="block text-grey-500">Links</span>
              </div>
            </div>
          </section>
          
          <section></section>
        </main>
      </div>
    </>
  );
};

export default dashboard;
