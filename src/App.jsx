import React from "react";

import { HomePage } from "./pages/home";
import { MainNavbar } from "./components/main-navbar";
import { MainLayout } from "./components/main-layout";

export default function App() {
  return (
    <MainLayout navbar={<MainNavbar />}>
      <HomePage />
    </MainLayout>
  );
}
