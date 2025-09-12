import React from "react";
import SideBar from "./_components/sidebar";
import "./layout.scss";
const AccountLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="account-layout body">
      <div className="account-layout__side-bar">
        <SideBar />
      </div>
      <div className="account-layout__children">{children}</div>
    </div>
  );
};

export default AccountLayout;
