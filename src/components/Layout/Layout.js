import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SideLayout, SideMain } from "./layout.elements";

const Layout = ({ children }) => {
  return (
    <SideLayout>
      <Sidebar />
      <SideMain>{children}</SideMain>
    </SideLayout>
  );
};

export default Layout;
