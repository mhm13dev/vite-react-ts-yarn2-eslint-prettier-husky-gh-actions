import React from "react";
import { Link } from "react-router-dom";

import { APP_ROUTES } from "@/constants/app-routes";

const Nav: React.FC = () => {
  return (
    <nav>
      <div>
        <Link to={APP_ROUTES.HOME}>Home</Link>
      </div>
      <div>
        <Link to={APP_ROUTES.DASHBOARD}>Dashboard</Link>
      </div>
    </nav>
  );
};

export default Nav;
