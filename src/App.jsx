import { useState, useRef } from "react";

import ReExt, { ReExtButton, ReExtContainer } from "@sencha/reext";
import { HomePage } from "./pages/home";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "stretch",
        flex: "1",
      }}
    >
      <ReExtContainer
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          width: "320px",
        }}
        childWidth={200}
      >
        <ReExt xtype="logo" />

        <ReExtButton
          childHeight={50}
          rootStyle={{ margin: "0 0 5px 0" }}
          text="west button 1"
        />
        <ReExt
          xtype="button"
          childHeight={50}
          style={{ margin: "0 0 5px 0" }}
          config={{ text: "west button 1" }}
        />
        <ReExt
          xtype="button"
          // childFlex={2}
          style={{ margin: "0 0 5px 0" }}
          config={{ text: "west button 2" }}
        />
        <ReExt
          xtype="button"
          style={{ margin: "0 0 5px 0" }}
          config={{ text: "west button 3" }}
        />
      </ReExtContainer>

      <ReExtContainer
        style={{
          height: "calc(100% - 16px)",
          position: "relative",
          flex: "1",
          backgroundColor: "#F4F5F9",
          padding: "8px 0 8px 8px",
          boxSizing: "border-box",
          borderRadius: "16px 0 0 16px",
          margin: "12px 0",
        }}
      >
        <HomePage />
      </ReExtContainer>
    </div>
  );
}

export default App;
