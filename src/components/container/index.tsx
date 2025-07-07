import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
function Container({ children }: IProps) {
  return <div className="max-w-7xl mx-auto px-2 lg:px-5 xl:px-0">{children}</div>;
}

export default Container;
