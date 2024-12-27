import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="journal-bg"></div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
