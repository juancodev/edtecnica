import React from "react";

type Layout = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = ({ children }: Layout) => {
  return <div className="container overflow-hidden">{children}</div>;
};

export { Layout };
