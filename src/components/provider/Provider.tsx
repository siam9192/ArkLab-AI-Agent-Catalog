"use client";

import React from "react";
import * as ReactRedux from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import AuthChecker from "./AuthChecker";

type TProvider = {
  children: React.ReactNode;
};

export default function Provider({ children }: TProvider) {
  return (
    <SessionProvider>
      <ReactRedux.Provider store={store}>
        <AuthChecker>{children}</AuthChecker>
      </ReactRedux.Provider>
    </SessionProvider>
  );
}
