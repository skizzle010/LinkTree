import React from "react";

const UserHeader = () => {
return (
    <>
    <header>
        <div className="flex flex-col md:flex-row p-5">
            <button className="inline-flex w-full md:w-auto px-5 py-3 text-red-500 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 border-2 border-red-500">
                <img src="/svg/link-edit.svg" className="w-6 mr-3" />
                Edit Links
            </button>
            <button className="inline-flex w-full md:w-auto px-5 py-3 text-blue-500 font-bold hover:text-blue-700 hover:bg-blue-100 rounded-md mb-3 border-2 border-blue-500  md:ml-4">
                <img src="/svg/profile.svg" className="w-6 mr-3" />
                Edit profile
            </button>

        </div>
    </header>
    </>
    )  
}

export default UserHeader;