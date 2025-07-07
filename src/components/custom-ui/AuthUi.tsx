"use client";
import React from "react";
import GoogleSignInButton from "./GoogleSignInButton";
import { motion } from "motion/react";
function AuthUi() {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative ">
      <h1 className="text-4xl font-medium  absolute left-2 top-2">
        <span className="text-primary   font-semibold">Ai</span>Hub
      </h1>
      <motion.div
        initial={{ translateX: -300, translateY: 100, opacity: 0.5 }}
        animate={{ translateX: 0, translateY: 0, opacity: 1, animationDuration: 1000 }}
        className=" w-10/12 lg:w-1/2 max-w-md border-2 border-gray-700/10 p-5  rounded-md space-y-4"
      >
        <img src="/login.jpg" alt="" />
        <GoogleSignInButton />
        <p className="text-sm">
          Allows users to quickly and securely sign in using their Google account, streamlining the
          login process without needing to remember additional passwords or create a new account
        </p>
      </motion.div>
    </div>
  );
}

export default AuthUi;
