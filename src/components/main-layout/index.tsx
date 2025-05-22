import React from "react";

// import "./layout.css";

type MainLayoutProps = {
  navbar: React.ReactNode;
  children: React.ReactNode;
};

export const MainLayout = ({ navbar, children }: MainLayoutProps) => {
  return (
    <main className="main-layout">
      {navbar}

      <div className="main-layout-content">{children}</div>
    </main>
  );
};
