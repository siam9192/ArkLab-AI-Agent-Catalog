import { signIn } from "next-auth/react";
import React from "react";

function GoogleSignInButton() {
  const googleLogoUrl = "/google-logo.webp";
  return (
    <button
      onClick={() => signIn("google")}
      className=" flex justify-center items-center gap-2 w-full p-2 border rounded-lg hover:cursor-pointer"
    >
      <img src={googleLogoUrl} alt="Google" className="size-10 rounded-full" />
      <p className="font-semibold text-lg">Continue with google</p>
    </button>
  );
}

export default GoogleSignInButton;
