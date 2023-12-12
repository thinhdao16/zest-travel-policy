import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import initMenus from "../../data/menus.js";
import "./sidebar.css";
import SidebarLogo from "./SidebarLogo.jsx";
import MenuList from "./MenuList.jsx";

function Sidebar({ ...props }) {
  const [menus] = useState(initMenus);





  return (
    <>
      <aside
        id="sidebar"
        className={`sidebarWrapper md:translate-x-0 -translate-x-full md:z-0 z-50 no-scrollbar ${props.className}`}
      >
        {/* Sidebar wrapper */}
        <div className="md:w-64 border-r-2 border-gray-100 h-full flex-col flex flex-shrink-0">
          {/* Logo */}
          <SidebarLogo toggle={props.toggle} icon={faLeaf} text="Zest Travel" />

          {/* Search Menu */}


          {/* Menu */}
          <MenuList menus={menus} toggle={props.toggle} />


        </div>
      </aside>

      {props.className === "mobile" && (
        <div
          id="overlaySidebar"
          onClick={props.toggle}
          className="hidden absolute w-full h-screen bg-black z-10 inset-0 opacity-60"
        >
          <div></div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
