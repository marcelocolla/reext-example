import React from "react";
import ReExt, { ReExtButton } from "@sencha/reext";

export const MainNavbar = () => {
  return (
    <nav className="main-layout-navbar">
      <ReExt xtype="logo" style={{ padding: "0 0 24px" }} />

      <hr className="ui-divider" />

      <ReExtButton text="Users" style={{ margin: "0 0 5px 0" }} />
      <ReExtButton text="Groups" style={{ margin: "0 0 5px 0" }} />
      <ReExtButton text="Settings" style={{ margin: "0 0 5px 0" }} />
      <ReExt
        xtype="button"
        style={{ margin: "0 0 5px 0" }}
        config={{ text: "Logout", arrowCls: "arrow" }}
      />
    </nav>
  );
};
