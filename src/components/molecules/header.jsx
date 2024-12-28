import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../atoms/button";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <Link variant>TalentTrove</Link>
        <Button variant="outline">Login</Button>
      </nav>
    </>
  );
};

export default Header;
