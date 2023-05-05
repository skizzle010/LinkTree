import React, { useState } from "react";
import styles from "../styles/apply.module.css";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
const Apply = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    fetch( `${process.env.NEXT_PUBLIC_SERVER_URL}/api/login`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("you are logged in!");
          localStorage.setItem('LinkTreeToken',data.token )
          router.push('/dashboard')
        }
        if (data.status === "not found") {
          toast.error("user not found!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section
        className={
          styles.background + " min-h-screen flex justify-center items-center"
        }
      >
        <div className="main flex flex-row justify-center items-center w-full mx-1">
          <div className="content flex flex-col justify-center items-center mx-auto w-1/2 ">
            <div className="border-2  p-2 rounded-xl bg-white">
              <h1 className="text-4xl text-center m-2">
                You are now among <br></br>
                the top creators
              </h1>
              <p className="text-center m-3">Access your Dashboard😎</p>
              <form
                onSubmit={handleLogin}
                className="flex flex-col justify-center items-center mx-auto"
              >
                <input
                  className="shadow-md border-2  my-2 px-2 py-1 w-2/3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <input
                  className="shadow-md border-2  my-2 px-2 py-1 w-2/3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                />
                <input
                  className="bg-indigo-600 text-white py-2 px-2 rounded-lg m-3 cursor-pointer"
                  type="submit"
                  value="Login"
                />
              </form>
            </div>
            <h4 className="text-center text-white pt-3">
              New User?{" "}
              <Link className="font-bold text-red-200" href="/apply">
                Apply
              </Link>
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apply;
