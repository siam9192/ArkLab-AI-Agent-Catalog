"use client";
import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import AuthUi from "../custom-ui/AuthUi";
import AuthenticationLoading from "../custom-ui/AuthenticationLoading";

function AuthChecker({ children }: { children: ReactNode }) {
  const {data,status} = useSession();
  const user = data?.user;
  if(status === 'loading') {
    return <AuthenticationLoading/>
  }
  if (!user) return <AuthUi />;
  return children;
}

export default AuthChecker;
