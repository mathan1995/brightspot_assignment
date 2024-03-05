import React, { useState } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLogo,
  SSidebar,
  SSidebarButton,
} from "./sidebar.elements";

import { AiOutlineHome, AiOutlineLeft, AiOutlineUser } from "react-icons/ai";
import { WiDayCloudyWindy } from "react-icons/wi";
import { MdOutlineAnalytics } from "react-icons/md";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <SSidebar $isOpen={sidebarOpen}>
      <SLogo>
        <svg
          id="logo-35"
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            className="ccompli1"
            fill="#007AFF"
          ></path>{" "}
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            className="ccustom"
            fill="#312ECB"
          ></path>{" "}
        </svg>
      </SLogo>

      <SDivider />
      {sideRoutes.map(({ icon, label, to }) => (
        <SLinkContainer key={label} $isactive={pathname === to}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <SSidebarButton
        $isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
      >
        <AiOutlineLeft />
      </SSidebarButton>
    </SSidebar>
  );
};

const sideRoutes = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Todo",
    icon: <MdOutlineAnalytics />,
    to: "/todo",
    notification: 3,
  },
  {
    label: "Weather",
    icon: <WiDayCloudyWindy />,
    to: "/weather",
    notification: 1,
  },
  {
    label: "Profile",
    to: "/profile",
    icon: <AiOutlineUser />,
  },
];

export default Sidebar;
