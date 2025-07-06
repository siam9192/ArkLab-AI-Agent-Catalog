"use client";

import React from "react";
import * as ReactRedux from "react-redux";
import { store } from "@/redux/store";

type TProvider = {
  children: React.ReactNode;
};

export default function Provider({ children }: TProvider) {
  return <ReactRedux.Provider store={store}>{children}</ReactRedux.Provider>;
}
