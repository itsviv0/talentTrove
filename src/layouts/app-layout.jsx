import Header from "@/components/molecules/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="journal-bg"></div>
      <div className="focus-glow"></div>
      <main
        className="min-h-screen container"
        style={{
          position: "relative",
          zIndex: 1,
          minWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
