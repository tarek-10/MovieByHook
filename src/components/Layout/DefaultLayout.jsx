import React from "react";
import Header from "./BasicLayout/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="defaultLayout">
      <header className="header">
        <Header />
      </header>
      <main className="main">{children}</main>
    </div>
  );
};

export default DefaultLayout;
