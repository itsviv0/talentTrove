import React from "react";
import { Outlet } from "react-router-dom";

const Onboarding = () => {
  return (
    <div>
      Onboarding
      <Outlet />
    </div>
  );
};

export default Onboarding;
